import { IEntityData } from './../../orm/types';
import { product_rate } from "./model"

export class ProductRateService {
  public async getProductsRate(args: { [key: string]: any } = {}): Promise<IEntityData> {
    const result: any = await product_rate.find(args)
    return result.data
  }
  public async createProductRate(args: any = {}): Promise<IEntityData> {
    const result: IEntityData = await product_rate.save(args)
    const newProductRate: IEntityData = await product_rate.findById(result.data.insertId)
    return newProductRate.data
  }
  public async updateProductRate(id: string, args: any = {}): Promise<string> {
    await product_rate.updateById(id, args)
    return `Product rate with id "${id}" was updated`
  }
  public async deleteProductRate(id: string): Promise<string> {
    await product_rate.deleteById(id)
    return `Product rate with id "${id}" was deleted`
  }
}