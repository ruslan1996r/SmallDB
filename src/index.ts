import app from "./app"
// import { ClearTables } from "./orm/testingData"
// import { InitEntities } from "./modules/index"
import { MySQLConnect, connectDB } from "./database"

async function main(): Promise<void> {
  // MySQLConnect
  await connectDB()
  // InitEntities()
  // ClearTables()
  await app.listen(app.get('port'))
  console.log(`Server was started on: ${app.get('port')}`)
}

main()