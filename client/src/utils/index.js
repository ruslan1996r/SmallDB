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