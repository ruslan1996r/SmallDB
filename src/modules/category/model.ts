import { Entity } from "../../orm/entity"

class Category extends Entity {
  constructor() {
    super()
    // this.registerEntity(`
    //   id INT auto_increment primary key,
    //   name VARCHAR(255) UNIQUE
    // `)
  }
}

export const category = new Category()