
import { Router } from "express"
import { Request, Response } from "express"
const router = Router()

import { client } from "../modules/client/model"
import { producer } from './../modules/producer/model';
import { category } from './../modules/category/model';
import { product } from './../modules/product/model';
import { booking } from './../modules/booking/model';
import { product_rate } from './../modules/product_rate/model';

const ents = [client, booking, producer, category, product, product_rate]
ents.forEach((ent: any) => {
  router.get(`/${ent.entityName}`, async (req: Request, res: Response): Promise<any> => {
    const result: any = await ent.find()
    res.send(result.data)
  })
})

export default router