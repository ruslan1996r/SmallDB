import { Entity } from './../../orm/entity';
class Producer extends Entity {
  constructor() {
    super()
    // this.setSchema = `
    //   id INT auto_increment primary key,
    //   name VARCHAR(255),
    //   country VARCHAR(255)
    // `
  }
}

export const producer = new Producer()