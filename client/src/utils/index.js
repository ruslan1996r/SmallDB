export function purifySchema(schema) {
  let purifyedSchema = {}
  for (const key in schema) {
    purifyedSchema[key] = ''
  }
  return purifyedSchema
}

export function onlyExisting(obj) {
  let newObj = {}
  for (const key in obj) {
    if (obj[key] && obj[key] !== '' && Object.keys(obj[key]).length !== 0) {
      newObj[key] = obj[key]
    }
  }
  // console.log("newObj", newObj)
  return newObj
}

export const getConditions = ({ computed, state, sort, select = {}, entity }) => {
  const sortConditions = selectValToSql(select.state, entity) || {}
  const _sort = sort || (select.state === 'avg_rate' && select.state)

  let body = {
    where: onlyExisting({ ...state, ...sortConditions.where }),
  }
  if (select.state) {
    body['from'] = sortConditions.from
  }
  if (computed) {
    body['computed'] = computed
  }
  if (_sort) {
    body['sort'] = _sort// sort
  }
  const conditions = {
    body: JSON.stringify(body)
  }
  return conditions
}

export function selectValToSql(val, entity) {
  // Нужно переделать этот метод
  const vals = {
    '1-5': {
      "$btw": [1, 5]
    },
    '5-10': {
      "$btw": [5, 10]
    },
    'rejected': "$not_null"
  }
  let query = {}
  if (entity === 'booking') {
    query = {
      "where": {
        "status": val
      }
    }
    return query
  }
  if (entity === 'product') {
    if (Object.keys(val).length > 0) {
      query = {
        "where": {
          "id": {
            [val]: "(SELECT product FROM booking)"
          }
        }
      }
    }
    return query
  }
  if (val === 'rejected') {
    query = {
      "from": "(SELECT * , (SELECT status FROM booking where client = client.id AND status = 'rejected') AS status FROM client) as client", // where status is not null
      "where": {
        "status": {
          "$nen": "NOT NULL"
        }
      }
    }
    return query
  } else {
    query = {
      "from": "(SELECT * , (SELECT COUNT(client) FROM booking where client = client.id) AS total FROM client) as client",
      "where": {
        "total": vals[val]
      }
    }
    return query
  }
}