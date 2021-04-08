import { Entity } from "../../orm/entity"

class Client extends Entity {
  schema: any
  constructor() {
    super()
  }
}

export const client = new Client()