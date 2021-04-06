import { Entity } from "../../orm/entity"
class Booking extends Entity {
  constructor() {
    super()
    // this.schema = `
    //   id INT auto_increment primary key,
    //   sum INT(255)
    // `
  }
}

export const booking = new Booking()