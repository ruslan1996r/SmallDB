import { MySQLConnect } from "../database"
import chalk from 'chalk';

export function TestInsert() {
  MySQLConnect.query(`
    INSERT into category (name) values ("sport"), ("classic"), ("kid")
  `)
  MySQLConnect.query(`
  INSERT into producer (name, country) values ("Salo", "Ukraine"), ("Zhora", "Russia")
`)
  MySQLConnect.query(`
    INSERT into product (name, gender, price, color, size, amount, producer, category)
    values
    ("Buba","Buba", 123,  "white", "small", 1, 1, "kid"),
    ("Bubaaaa","Buba222", 323, "white", "big", 1, 1, "sport"),
    ("Hat", "Abibas", 98,  "red", "big", 4, 2, "classic")
  `)

  MySQLConnect.query(`
    INSERT into client (email, number)
    values
    ('putin@mail.ru', 123456),
    ('obama@gmail.com', 887766),
    ('poroshenko@ukr.ua', 1488);
  `)

  MySQLConnect.query(`
    INSERT into booking (sum, order_date, address, status, client, product)
    values
    (322, '05.06.2021', 'popkina 47', 'in_progress', 2, 1),
    (1772, '05.06.2021', 'zhopkina 68', 'in_progress', 2, 2)
  `)

  MySQLConnect.query(`
    INSERT into product_rate (rate, order_date, product, client)
    values
    (15, '02.11.2012', 1, 1),
    (4, '02.11.2012', 1, 2),
    (6, '02.11.2012', 1, 3),

    (4, '02.11.2012', 2, 2),
    (7, '02.11.2012', 2, 3),
    (11, '02.11.2012', 3, 1)
  `)
}

export function ClearTables() {
  const tables: String[] = [
    'booking',
    'product_rate',
    'client',
    'product',
    'producer',
    'category',
  ]
  let count = 0
  tables.forEach((table: String) => {
    const $query = 'DROP TABLE IF EXISTS ' + table
    MySQLConnect.query($query)
    count += 1
  });
  // console.log(chalk.bgRgb(15, 100, 204).inverse(' Tables was cleared: ' + count + " "))
  console.log(chalk.yellow('Tables was cleared: ' + count))
}