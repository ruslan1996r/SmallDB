import express from "express"
import cors from "cors"

import clientRouter from "./routes/client"
import producerRouter from "./routes/producer"
import productRouter from "./routes/product"
import categoryRouter from "./routes/category"
import bookingRouter from "./routes/booking"
import productRateRouter from "./routes/productRate"

const app = express()
app.set("port", process.env.PORT || 4001)

app.use(cors())
app.use(express.json())
app.use("/client", clientRouter)
app.use("/producer", producerRouter)
app.use("/product", productRouter)
app.use("/category", categoryRouter)
app.use("/booking", bookingRouter)
app.use("/product_rate", productRateRouter)

export default app