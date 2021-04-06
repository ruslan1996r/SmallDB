import { Entity } from "../../orm/entity"

class Booking extends Entity {
  constructor() {
    super()
    this.setSchema = `
      id INT auto_increment primary key,
      sum INT(255),
      order_date DATE,
      address VARCHAR(255),
      status ENUM('in_progress', 'rejected', 'bought'),

      client INT NOT NULL,
      foreign key (client) references client(id)
      ON DELETE CASCADE,

      product INT NOT NULL,
      foreign key (product) references product(id)
      ON DELETE CASCADE
    `
  }
}

export const booking = new Booking()

// export { Booking }