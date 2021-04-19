
import { Request, Response } from "express"

import { ProductService } from "./service"
import { IEntityData } from './../../orm/types';

class ProductController {
  constructor(private productService: ProductService) { }

  public getProducts = async (req: Request, res: Response): Promise<Response<IEntityData>> => {
    try {
      const productData = req.body
      const result = await this.productService.getProducts(productData)
      return res.status(200).json(result)
    } catch (e) {
      return res.status(400).json({ status: 400, message: e })
    }
  }
  public createProduct = async (req: Request, res: Response): Promise<Response<IEntityData>> => {
    try {
      const productData = req.body
      const result = await this.productService.createProduct(productData)
      return res.status(200).json(result)
    } catch (e) {
      return res.status(400).json({ status: 400, message: e })
    }
  }
  public updateProduct = async (req: Request, res: Response): Promise<Response<string>> => {
    try {
      const { id } = req.params
      const productData = req.body
      const result = await this.productService.updateProduct(id, productData)
      return res.status(200).json(result)
    } catch (e) {
      return res.status(400).json({ status: 400, message: e })
    }
  }
  public deleteProduct = async (req: Request, res: Response): Promise<Response<string>> => {
    try {
      const { id } = req.params
      const result = await this.productService.deleteProduct(id)
      return res.status(200).json(result)
    } catch (e) {
      return res.status(400).json({ status: 400, message: e })
    }
  }
  public productReport = async (req: Request, res: Response): Promise<any> => {
    try {
      const result: any = await this.productService.productReport()
      return res.status(200).sendFile(result)
    } catch (e) {
      return res.status(400).json({ status: 400, message: e })
    }
  }
  // public salesReport = async (req: Request, res: Response): Promise<any> => {
  //   try {
  //     const result: any = await this.productService.salesReport()
  //     return res.status(200).sendFile(result)
  //   } catch (e) {
  //     return res.status(400).json({ status: 400, message: e })
  //   }
  // }
}

export default new ProductController(new ProductService)