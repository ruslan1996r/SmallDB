import { Request, Response } from "express"

import { ProductRateService } from "./service"
import { IEntityData } from './../../orm/types';

class ProductRateController {
  constructor(private productRateService: ProductRateService) { }

  public getProductsRate = async (req: Request, res: Response): Promise<Response<IEntityData>> => {
    try {
      const roductsRateData = req.body
      const result = await this.productRateService.getProductsRate(roductsRateData)
      return res.status(200).json(result)
    } catch (e) {
      return res.status(400).json({ status: 400, message: e })
    }
  }
  public createProductRate = async (req: Request, res: Response): Promise<Response<IEntityData>> => {
    try {
      const roductsRateData = req.body
      const result = await this.productRateService.createProductRate(roductsRateData)
      return res.status(200).json(result)
    } catch (e) {
      return res.status(400).json({ status: 400, message: e })
    }
  }
  public updateProductRate = async (req: Request, res: Response): Promise<Response<string>> => {
    try {
      const { id } = req.params
      const roductsRateData = req.body
      const result = await this.productRateService.updateProductRate(id, roductsRateData)
      return res.status(200).json(result)
    } catch (e) {
      return res.status(400).json({ status: 400, message: e })
    }
  }
  public deleteProductRate = async (req: Request, res: Response): Promise<Response<string>> => {
    try {
      const { id } = req.params
      const result = await this.productRateService.deleteProductRate(id)
      return res.status(200).json(result)
    } catch (e) {
      return res.status(400).json({ status: 400, message: e })
    }
  }
}

export default new ProductRateController(new ProductRateService)