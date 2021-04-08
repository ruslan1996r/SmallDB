import { Entity } from "../../orm/entity"

class Product extends Entity {
  constructor() {
    super()
  }
}

export const product = new Product()