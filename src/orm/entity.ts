import { MySQLConnect } from "../database"

// let ENTITIES: any = {}
export const test = 'testEXPORT'

export class Entity {
  MySQLConnect: any;
  data: any;
  schema: any;
  constructor() {
    this.MySQLConnect = MySQLConnect;
  }

  get entityName() {
    return this.constructor.name.toLocaleLowerCase()
  }

  set setSchema(value: any) {
    this.schema = value
  }

  public registerEntity(): void {
    // entityDescription: string
    // ENTITIES[this.entityName] = this.entityName
    const $query = `CREATE TABLE IF NOT EXISTS ${this.entityName} (${this.schema})`
    console.log("$query", $query)
    MySQLConnect.query($query)
  }

  conditions(args: any) {
    if (Object.keys(args).length === 0) return ''
    let conditionQuery = 'WHERE'
    let index = 1

    for (const key in args) {
      const queryPart = args[key];
      const and = (index < Object.keys(args).length) ? 'AND' : ''
      conditionQuery += ` ${key} = '${queryPart}' ${and}`
      index++
    }
    return conditionQuery
  }

  computedProps(args: any) {
    if (Object.keys(args).length === 0) return ''
    let computedQuery = ', '

    for (const key in args) {
      const queryPart = args[key]
      computedQuery += `(${queryPart}) AS ${key}`
    }
    return computedQuery
  }

  async eager(entityName: any) {
    const _data = this.data.map(async (field: any) => {
      const result: any = await this.findById(field[entityName])
      field[entityName] = result.data
      return field
    })
    const updatedData = await Promise.all(_data)
    this.data = updatedData
    return this
  }

  find(args: any = {}) {
    const { select = ["*"], where = {}, computed = {} } = args
    return new Promise((resolve, reject) => {
      const _query = `
        SELECT ${select.join(',')} ${this.computedProps(computed)}
        FROM ${this.entityName}
        ${this.conditions(where)}
      `
      MySQLConnect.query(_query, (err: any, data: any, fields: any) => {
        resolve(Object.assign(this, { data }))
      })
    })
  }

  findById(id: number | string, args: any = {}) {
    const { select = ['*'], where = {}, computed = {} } = args
    return new Promise((resolve, reject) => {
      const _query = `
        SELECT ${select.join(",")} ${this.computedProps(computed)}
        FROM ${this.entityName}
        ${this.conditions(Object.assign(where, { id }))}
      `
      MySQLConnect.query(_query, (err: any, data: any, fields: any) => {
        resolve(Object.assign(this, { data }))
      })
    })
  }
}

// export { Entity }
// class Client extends Entity {
//   constructor() {
//     super()
//     // this.registerEntity(this)
//   }
// }
// class Product extends Entity {
//   constructor() {
//     super()
//     // this.registerEntity(this)
//   }
// }
// class Booking extends Entity {
//   constructor() {
//     super()
//     // this.registerEntity(this)
//   }
// }
// const client = new Client()
// const product = new Product()
// const booking = new Booking()

// module.exports = { client, product, booking }