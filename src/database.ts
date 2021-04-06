import mysql from "mysql";
import chalk from 'chalk';

import { ClearTables, TestInsert } from "./orm/testingData"
import { InitEntities } from "./modules/index"

const MySQLConnect = mysql.createConnection({
  host: "localhost",
  user: "root222",
  password: "password",
  database: "small",
  multipleStatements: true
});

async function connectDB(): Promise<void> {
  try {
    return new Promise((resolve, reject) => {
      MySQLConnect.connect((err: Error) => {
        if (!err) {
          console.log(chalk.blueBright("DB connected!"))
          ClearTables();
          InitEntities()
          TestInsert()
          resolve(console.log(chalk.blueBright("DB init finished")))
        } else {
          console.log("Connection failed :" + JSON.stringify(err, undefined, 2));
        }
      })
    });
  } catch (e) {
    console.log("DB error: ", e)
  }
}

export { MySQLConnect, connectDB }