import { MySQLConnect } from "../database"
import { IEntity, IArgs } from "./types"

export class Entity implements IEntity {
  data: any;

  get entityName(): string {
    return this.constructor.name.toLocaleLowerCase()
  }

  // test() {
  //   console.log("HELLO FROM: ", this.entityName)
  // }
  // set setSchema(value: any) {
  //   this.schema = value
  // }

  // registerEntity(): any {
  //   const $query = `CREATE TABLE IF NOT EXISTS ${this.entityName} (${this.schema})`
  //   MySQLConnect.query($query)
  //   console.log(chalk.italic.redBright(this.entityName.toLocaleUpperCase()) + " was created")
  // }

  conditions(args: IArgs) {
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

  computedProps(args: IArgs) {
    if (Object.keys(args).length === 0) return ''
    let computedQuery = ', '

    for (const key in args) {
      const queryPart = args[key]
      computedQuery += `(${queryPart}) AS ${key}`
    }
    return computedQuery
  }

  async eager(entityName: string) {
    const _data = this.data.map(async (field: any) => {
      const result: any = await this.findById(field[entityName])
      field[entityName] = result.data
      return field
    })
    const updatedData = await Promise.all(_data)
    this.data = updatedData
    return this
  }

  find(args: IArgs = {}) {
    const { select = ["*"], where = {}, computed = {} } = args

    return new Promise((resolve, reject) => {
      const _query = `
        SELECT ${select.join(',')} ${this.computedProps(computed)}
        FROM ${this.entityName}
        ${this.conditions(where)}
      `
      MySQLConnect.query(_query, (err: Error, data: { [key: string]: any }, fields: any) => {
        resolve(Object.assign(this, { data }))
      })
    })
  }

  findById(id: number | string, args: IArgs = {}) {
    const { select = ['*'], where = {}, computed = {} } = args

    return new Promise((resolve, reject) => {
      const _query = `
        SELECT ${select.join(",")} ${this.computedProps(computed)}
        FROM ${this.entityName}
        ${this.conditions(Object.assign(where, { id }))}
      `
      MySQLConnect.query(_query, (err: any, data: { [key: string]: any }, fields: any) => {
        resolve(Object.assign(this, { data }))
      })
    })
  }
}