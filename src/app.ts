import express from "express"
import cors from "cors"
import bookingRouter from "./routes/booking"

const app = express()
app.set("port", process.env.PORT || 4000)

app.use(cors())
app.use(express.json())
app.use("/", bookingRouter)

export default app