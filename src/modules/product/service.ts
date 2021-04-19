import { generateTable } from '../../utils/generateTable';
import { IEntityData } from './../../orm/types';
import { product } from "./model"

export class ProductService {
  public async getProducts(args: { [key: string]: any } = {}): Promise<IEntityData> {
    const result: any = await product.find({
      computed: {
        avg_rate: 'SELECT AVG(rate) FROM product_rate WHERE product.id = product_rate.product'
      },
      ...args
    })
    return result.data
  }

  public async createProduct(args: any = {}): Promise<IEntityData> {
    const result: IEntityData = await product.save(args)
    const newProduct: IEntityData = await product.findById(result.data.insertId)
    return newProduct.data
  }

  public async updateProduct(id: string, args: any = {}): Promise<string> {
    await product.updateById(id, args)
    return `Product with id "${id}" was updated`
  }
  public async deleteProduct(id: string): Promise<string> {
    await product.deleteById(id)
    return `Product with id "${id}" was deleted`
  }
  public async productReport(): Promise<any> {
    const result: any = await product.find({
      select: [
        'product.id',
        'product.name',
        'product.gender',
        'product.price',
        'product.color',
        'product.size',
        'product.amount',
        'product.category',
        'producer.name as producer'
      ],
      computed: {
        total: "SELECT COUNT(product) FROM booking where product = product.id"
      },
      join: {
        $roj: "producer"
      }
    })
    return await generateTable(result.data, 'product', 'Report on the number of goods sold')
  }
  // public async salesReport(): Promise<any> {
  //   const result: any = await product.find({
  //     select: [
  //       'product.id',
  //       'product.name',
  //       'product.gender',
  //       'product.price',
  //       'product.color',
  //       'product.size',
  //       'product.amount',
  //       'product.category',
  //       'producer.name as producer'
  //     ],
  //     from: "(SELECT * , (SELECT status FROM booking where product = product.id AND status = 'success') AS status FROM product) as product", // products
  //     where: {
  //       status: 'success'
  //     },
  //     join: {
  //       $roj: "producer",
  //     }
  //   })
  //   return await generateTable(result.data, 'sales')
  // }

}