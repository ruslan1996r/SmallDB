import mysql from "mysql";
import chalk from 'chalk';

import { ClearTables, TestInsert } from "./orm/testingData"
import { InitEntities } from "./modules/index"
// import {
//   client,
//   product,
//   booking,
//   producer,
//   category,
//   product_rate
// } from "./modules/index"

const MySQLConnect = mysql.createConnection({
  host: "localhost",
  user: "root222",
  password: "password",
  database: "small",
  multipleStatements: true
});

async function connectDB() {
  try {
    return new Promise((resolve, reject) => {
      resolve(MySQLConnect.connect((err: any) => {
        if (!err) {
          console.log(chalk.blueBright("DB connected!"))
          ClearTables();
          InitEntities()
          console.log(chalk.blueBright("DB init finished"))
        } else {
          console.log("Connection failed :" + JSON.stringify(err, undefined, 2));
        }
      }))
    });
  } catch (e) {
    console.log("DB error: ", e)
  }
}


// function clear() {
//   const tables = [
//     'booking',
//     'product_rate',
//     'client',
//     'product',
//     'producer',
//     'category',
//   ]
//   let count = 0
//   tables.forEach(table => {
//     const $query = 'DROP TABLE IF EXISTS ' + table
//     MySQLConnect.query($query)
//     count += 1
//   });
//   console.log(chalk.yellow('Tables was cleared: ' + count))
// }
// clear()

export { MySQLConnect, connectDB }