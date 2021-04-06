import { Entity, test } from './../../orm/entity';
// import { Entity } from "../../orm/entity"
// import {Entity} from "../../orm/entity"

// console.log("Entity", Entity, "test", test)
class Producer extends Entity {
  constructor() {
    super()
    this.setSchema = `
      id INT auto_increment primary key,
      name VARCHAR(255),
      country VARCHAR(255)
    `
  }
}

export const producer = new Producer()
// export { Producer }