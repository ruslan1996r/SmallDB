import { MySQLConnect } from "../database"
// import { clientSchema } from "./client/model"
// const { client } = require("./client/model")
// const { booking } = require("./booking/model")
// import { booking } from "./booking/model"
// import { producerSchema } from "./producer/model"
// import { Category } from "./category/model"
// import { Product } from "./product/model"
// import { ProductRate } from "./product_rate/model"
// import { schema } from "./client/model"
// import { registerEntityClient } from "./client/model"
// import { registerEntityProducer } from "./producer/model"

function initEntity(entityName: string, entitySchema: string): void {
  MySQLConnect.query(`CREATE TABLE IF NOT EXISTS ${entityName} (${entitySchema})`)
}

function InitEntities(): void {
  const clientSchema = `
    id INT auto_increment primary key,
    email VARCHAR(255),
    number INT(255) NOT NULL
  `
  const producerSchema = `
    id INT auto_increment primary key,
    name VARCHAR(255),
    country VARCHAR(255)
  `
  const categorySchema = `
    id INT auto_increment primary key,
    name VARCHAR(255) UNIQUE
  `
  const productSchema = `
    id INT auto_increment primary key,
    name VARCHAR(255),
    sex VARCHAR(255),
    price INT(255),

    color ENUM('white', 'black', 'red'),
    size ENUM('small', 'big'),
    amount INT(255),

    producer INT,
    foreign key (producer) references producer(id),

    category VARCHAR(255) DEFAULT NULL,
    foreign key (category) references category(name)
  `
  const bookingSchema = `
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
  const productSchemaRate = `
    id INT auto_increment primary key,
    rate INT(255),
    order_date DATE,
    product INT NOT NULL,
    foreign key (product) references product(id)
    ON DELETE CASCADE,

    client INT NOT NULL,
    foreign key (client) references client(id)
    ON DELETE CASCADE
  `
  const entities: { [key: string]: string } = {
    'client': clientSchema,
    'producer': producerSchema,
    'category': categorySchema,
    'product': productSchema,
    'booking': bookingSchema,
    'product_rate': productSchemaRate
  }

  for (const key in entities) {
    initEntity(key, entities[key])
  }

  // MySQLConnect.query(`
  //   CREATE TABLE IF NOT EXISTS client(
  //     id INT auto_increment primary key,
  //     email VARCHAR(255),
  //     number INT(255) NOT NULL
  //   );
  // `)

  // MySQLConnect.query(`
  //   CREATE TABLE IF NOT EXISTS producer(
  //   id INT auto_increment primary key,
  //   name VARCHAR(255),
  //   country VARCHAR(255)
  // );
  // `)

  // MySQLConnect.query(`
  //   CREATE TABLE IF NOT EXISTS category(
  //     id INT auto_increment primary key,
  //     name VARCHAR(255) UNIQUE
  //   )
  // `)
  //   MySQLConnect.query(`
  //   CREATE TABLE IF NOT EXISTS product(
  //     id INT auto_increment primary key,
  //     name VARCHAR(255),
  //     sex VARCHAR(255),
  //     price INT(255),

  //     color ENUM('white', 'black', 'red'),
  //     size ENUM('small', 'big'),
  //     amount INT(255),

  //     producer INT,
  //     foreign key (producer) references producer(id),

  //     category VARCHAR(255) DEFAULT NULL,
  //     foreign key (category) references category(name)


  //   );
  // `)

  //   MySQLConnect.query(`
  //   CREATE TABLE IF NOT EXISTS booking(
  //     id INT auto_increment primary key,
  //     sum INT(255),
  //     order_date DATE,
  //     address VARCHAR(255),
  //     status ENUM('in_progress', 'rejected', 'bought'),

  //     client INT NOT NULL,
  //     foreign key (client) references client(id)
  //     ON DELETE CASCADE,

  //     product INT NOT NULL,
  //     foreign key (product) references product(id)
  //     ON DELETE CASCADE
  //   );
  // `)

  //   MySQLConnect.query(`
  //     CREATE TABLE IF NOT EXISTS product_rate(
  //       id INT auto_increment primary key,
  //       rate INT(255),
  //       order_date DATE,

  //       product INT NOT NULL,
  //       foreign key (product) references product(id)
  //       ON DELETE CASCADE,

  //       client INT NOT NULL,
  //       foreign key (client) references client(id)
  //       ON DELETE CASCADE
  //     )
  // `)
}

export { InitEntities }