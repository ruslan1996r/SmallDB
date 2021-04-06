import { Entity, test } from "../../orm/entity"
console.log("Entity", Entity, "test", test)

class Client extends Entity {
  constructor() {
    super()
    this.setSchema = `
      id INT auto_increment primary key,
      email VARCHAR(255),
      number INT(255) NOT NULL
    `
  }
}

export const client = new Client()