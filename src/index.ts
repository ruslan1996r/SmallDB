import app from "./app"
import { connectDB } from "./database"

async function main(): Promise<void> {
  await connectDB()
  app.listen(app.get('port'), () => console.log(`Server was started on: ${app.get('port')}`))
}

main()