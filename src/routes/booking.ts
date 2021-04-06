import { Router } from "express"
import { Request, Response } from "express"
const router = Router()

import { client } from "../modules/client/model"
import { producer } from "../modules/producer/model"

// import { client } from "../modules/client"
// import {
//   client,
//   // product,
//   // booking,
//   // producer,
//   // category,
//   // product_rate
// } from "../modules/index"

// const ents = [client, product, booking, producer, category, product_rate]

// ents.forEach((ent: any) => {
//   router.get(`/${ent.entityName}`, async (req: Request, res: Response): Promise<any> => {
//     const result: any = await ent.find()
//     res.send(result.data)
//   })
// })

// router.get("/client", async (req: Request, res: Response): Promise<any> => {
//   const result: any = await client.find()
//   res.send(result.data)
// })
router.get("/producer", async (req: Request, res: Response): Promise<any> => {
  const result: any = await producer.find()
  res.send(result.data)
})
// router.get("/product", async (req: Request, res: Response): Promise<any> => {
//   const result: any = await product.find()
//   res.send(result.data)
// })
// router.get("/booking", async (req: Request, res: Response): Promise<any> => {
//   const result: any = await booking.find()
//   res.send(result.data)
// })

// router.get("/category", async (req: Request, res: Response): Promise<any> => {
//   const result: any = await category.find()
//   res.send(result.data)
// })
// router.get("/product_rate", async (req: Request, res: Response): Promise<any> => {
//   const result: any = await product_rate.find()
//   res.send(result.data)
// })

export default router