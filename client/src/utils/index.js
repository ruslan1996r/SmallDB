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
    if (obj[key] && obj[key] !== '') {
      newObj[key] = obj[key]
    }
  }
  return newObj
}

export const getConditions = ({ computed, state, select = {} }) => {
  const sortConditions = selectValToSql(select.state) || {}
  let body = {
    where: onlyExisting({ ...state, ...sortConditions.where }),
  }
  if (select.state) {
    body['from'] = sortConditions.from
  }
  if (computed) {
    body['computed'] = computed
  }
  const conditions = {
    body: JSON.stringify(body)
  }
  return conditions
}

export function selectValToSql(val) {
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
  if (val === 'rejected') {
    query = {
      "from": "(SELECT * , (SELECT status FROM booking where client = client.id AND status = 'rejected') AS status FROM client) as client where status is not null"
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