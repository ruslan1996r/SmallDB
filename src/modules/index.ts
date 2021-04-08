import { MySQLConnect } from "../database"

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
    gender VARCHAR(255),
    price INT(255),

    color ENUM('white', 'black', 'red'),
    size ENUM('small', 'big'),
    amount INT(255),

    producer INT,
    foreign key (producer) references producer(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,

    category VARCHAR(255) DEFAULT NULL,
    foreign key (category) references category(name)
    ON UPDATE CASCADE
    ON DELETE CASCADE
  `
  const bookingSchema = `
    id INT auto_increment primary key,
    sum INT(255),
    order_date DATE,
    address VARCHAR(255),
    status ENUM('in_progress', 'rejected', 'success'),

    client INT NOT NULL,
    foreign key (client) references client(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,

    product INT NOT NULL,
    foreign key (product) references product(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
  `
  const productSchemaRate = `
    id INT auto_increment primary key,
    rate INT(255),
    order_date DATE,
    product INT NOT NULL,
    foreign key (product) references product(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,

    client INT NOT NULL,
    foreign key (client) references client(id)
    ON UPDATE CASCADE
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
}

export { InitEntities }