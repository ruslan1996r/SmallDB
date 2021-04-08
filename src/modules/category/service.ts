import { IEntityData } from './../../orm/types';
import { category } from "./model"

export class CategoryService {
  public async getCategory(args: { [key: string]: any } = {}): Promise<IEntityData> {
    const result: any = await category.find(args)
    return result.data
  }
  public async createCategory(args: any = {}): Promise<IEntityData> {
    const result: IEntityData = await category.save(args)
    const newCategory: IEntityData = await category.findById(result.data.insertId)
    return newCategory.data
  }
  public async updateCategory(id: string, args: any = {}): Promise<string> {
    await category.updateById(id, args)
    return `Category with id "${id}" was updated`
  }
  public async deleteCategory(id: string): Promise<string> {
    await category.deleteById(id)
    return `Category with id "${id}" was deleted`
  }
}