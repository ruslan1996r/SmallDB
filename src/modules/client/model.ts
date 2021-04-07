import { Entity } from "../../orm/entity"
// import { MySQLConnect } from "../../database"
// import chalk from "chalk"

class Client extends Entity {
  schema: any
  constructor() {
    super()
    // this.schema = `
    //   id INT auto_increment primary key,
    //   email VARCHAR(255),
    //   number INT(255) NOT NULL
    // `
  }
  // registerEntity = (): void => {
  //   const $query = `CREATE TABLE IF NOT EXISTS ${this.entityName} (${this.schema})`
  //   MySQLConnect.query($query)
  //   console.log(chalk.italic.redBright(this.entityName.toLocaleUpperCase()) + " was created")
  // }
}

export const client = new Client()
export const clientSchema = `
    id INT auto_increment primary key,
    email VARCHAR(255),
    number INT(255) NOT NULL
`
// export const registerEntityClient = client.registerEntity