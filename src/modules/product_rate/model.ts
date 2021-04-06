import { Entity } from "../../orm/entity"

class Product_Rate extends Entity {
  constructor() {
    super()
    // this.registerEntity(`
    //   CREATE TABLE IF NOT EXISTS product_rate(
    //   id INT auto_increment primary key,
    //   rate INT(255),
    //   order_date DATE,

    //   product INT NOT NULL,
    //   foreign key (product) references product(id)
    //   ON DELETE CASCADE,

    //   client INT NOT NULL,
    //   foreign key (client) references client(id)
    //   ON DELETE CASCADE
    // `)
  }
}

export const product_rate = new Product_Rate()