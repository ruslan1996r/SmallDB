import { Entity } from "../../orm/entity"

class Product extends Entity {
  constructor() {
    super()
    // this.registerEntity(`
    //   id INT auto_increment primary key,
    //   name VARCHAR(255),
    //   sex VARCHAR(255),
    //   price INT(255),

    //   color ENUM('white', 'black', 'red'),
    //   size ENUM('small', 'big'),
    //   amount INT(255),

    //   producer INT,
    //   foreign key (producer) references producer(id),

    //   category VARCHAR(255) DEFAULT NULL,
    //   foreign key (category) references category(name)
    // `)
  }
}

export const product = new Product()