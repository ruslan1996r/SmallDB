import { Entity } from "../../orm/entity"

class Client extends Entity {
  constructor() {
    super()
    // this.schema = `
    //   id INT auto_increment primary key,
    //   email VARCHAR(255),
    //   number INT(255) NOT NULL
    // `
  }
  // static setSchema = `
  //     id INT auto_increment primary key,
  //     email VARCHAR(255),
  //     number INT(255) NOT NULL
  //   `
}

export const client = new Client()