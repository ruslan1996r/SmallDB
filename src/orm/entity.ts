import { MySQLConnect } from "../database"
import { IEntity, IArgs, IEntityData } from "./types"

export class Entity implements IEntity {
  data: any;
  conditions: IArgs = {
    $btw: "BETWEEN",
    $or: "OR"
  }

  get entityName(): string {
    return this.constructor.name.toLocaleLowerCase()
  }

  updateValuesAndKeys(fields: { [key: string]: any }): string {
    let updateFields: string = ""
    let index: number = 1;
    for (let key in fields) {
      updateFields += `${key} = "${fields[key]}" ${index < Object.keys(fields).length ? ", " : ""}`
      index++
    }
    return updateFields
  }

  saveValuesAndKeys(fields: { [key: string]: any }): any {
    let fieldsKeys: string = ''
    let fieldsValues: string = ''
    let index: number = 1;
    for (let key in fields) {
      fieldsKeys += `${key}${index < Object.keys(fields).length ? ", " : ""}`
      fieldsValues += `"${fields[key]}"${index < Object.keys(fields).length ? ", " : ""}`
      index++
    }
    return { fieldsKeys, fieldsValues }
  }

  createCondition(queryObject: IArgs) {
    const key = Object.keys(queryObject)[0]
    const value = queryObject[key].join(' AND ')
    return String(this.conditions[key] + " " + value)
  }

  where(args: IArgs) {
    if (Object.keys(args).length === 0) return ''
    let conditionQuery = 'WHERE'
    let index = 1

    for (const key in args) {
      let queryPart = ''
      if (typeof args[key] === 'string' || typeof args[key] === 'number') {
        queryPart = ` = "${args[key]}"`
      }
      if (typeof args[key] === 'object') {
        queryPart = this.createCondition(args[key])
      }
      const and = (index < Object.keys(args).length) ? 'AND' : ''
      conditionQuery += ` ${key} ${queryPart} ${and}`
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
    return Object.assign(this, updatedData)
  }

  find(args: IArgs = {}) {
    const { select = ["*"], where = {}, computed = {}, from = this.entityName } = args

    return new Promise((resolve, reject) => {
      const _query = `
        SELECT ${select.join(',')} ${this.computedProps(computed)}
        FROM ${from}
        ${this.where(where)}
      `
      // console.log("_query", _query)
      MySQLConnect.query(_query, (err: Error, data: { [key: string]: any }, fields: any) => {
        resolve(Object.assign(this, { data }))
      })
    })
  }

  findById(id: number | string, args: IArgs = {}): Promise<IEntityData> {
    const { select = ['*'], where = {}, computed = {} } = args

    return new Promise((resolve, reject) => {
      const _query = `
        SELECT ${select.join(",")} ${this.computedProps(computed)}
        FROM ${this.entityName}
        ${this.where(Object.assign(where, { id }))}
      `
      MySQLConnect.query(_query, (err: any, data: { [key: string]: any }, fields: any) => {
        data = data.length > 0 ? data[0] : {}
        resolve(Object.assign(this, { data }))
      })
    })
  }
  save(fields: { [key: string]: any }): Promise<IEntityData> {
    const { fieldsKeys, fieldsValues } = this.saveValuesAndKeys(fields)
    return new Promise((resolve, reject) => {
      const _query = `
        INSERT into ${this.entityName} (${fieldsKeys})
        VALUES (${fieldsValues})
      `
      MySQLConnect.query(_query, (err: any, data: { [key: string]: any }, fields: any) => {
        resolve(Object.assign(this, { data }))
      })
    })
  }
  updateById(id: string | number, fields: { [key: string]: any }, args: IArgs = {}): Promise<IEntityData> {
    const { where = {} } = args
    return new Promise((resolve, reject) => {
      const _query = `
        UPDATE ${this.entityName} SET ${this.updateValuesAndKeys(fields)}
        ${this.where(Object.assign(where, { id }))}
      `
      MySQLConnect.query(_query, (err: any, data: { [key: string]: any }, fields: any) => {
        if (err) reject(err)
        resolve(Object.assign(this, { data }))
      })
    })
  }

  deleteById(id: string) {
    return new Promise((resolve, reject) => {
      const _query = `DELETE FROM ${this.entityName} WHERE id = ${id}`
      MySQLConnect.query(_query, (err: any, data: { [key: string]: any }, fields: any) => {
        if (err) reject(err)
        resolve(Object.assign(this, { data }))
      })
    })
  }
}