import express from "express"
import bookingRouter from "./routes/booking"

const app = express()

app.set("port", process.env.PORT || 4000)

app.use(express.json())
app.use("/", bookingRouter)

export default app