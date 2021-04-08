import { Request, Response } from "express"

import { CategoryService } from "./service"
import { IEntityData } from './../../orm/types';

class CaterogryController {
  constructor(private categoryService: CategoryService) { }

  public getCategory = async (req: Request, res: Response): Promise<Response<IEntityData>> => {
    try {
      const categoryData = req.body
      const result = await this.categoryService.getCategory(categoryData)
      return res.status(200).json(result)
    } catch (e) {
      return res.status(400).json({ status: 400, message: e })
    }
  }
  public createCategory = async (req: Request, res: Response): Promise<Response<IEntityData>> => {
    try {
      const categoryData = req.body
      const result = await this.categoryService.createCategory(categoryData)
      return res.status(200).json(result)
    } catch (e) {
      return res.status(400).json({ status: 400, message: e })
    }
  }
  public updateCategory = async (req: Request, res: Response): Promise<Response<string>> => {
    try {
      const { id } = req.params
      const categoryData = req.body
      const result = await this.categoryService.updateCategory(id, categoryData)
      return res.status(200).json(result)
    } catch (e) {
      return res.status(400).json({ status: 400, message: e })
    }
  }
  public deleteCategory = async (req: Request, res: Response): Promise<Response<string>> => {
    try {
      const { id } = req.params
      const result = await this.categoryService.deleteCategory(id)
      return res.status(200).json(result)
    } catch (e) {
      return res.status(400).json({ status: 400, message: e })
    }
  }
}

export default new CaterogryController(new CategoryService)