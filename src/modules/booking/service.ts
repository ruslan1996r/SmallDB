import { IEntityData } from './../../orm/types';
import { generateTable } from "../../utils/generateTable"
import { booking } from "./model"

export class BookingService {
  public async getBookings(args: { [key: string]: any } = {}): Promise<IEntityData> {
    const result: any = await booking.find(args)
    return result.data
  }
  public async createBooking(args: any = {}): Promise<IEntityData> {
    const result: IEntityData = await booking.save(args)
    const newBooking: IEntityData = await booking.findById(result.data.insertId)
    return newBooking.data
  }
  public async updateBooking(id: string, args: any = {}): Promise<string> {
    await booking.updateById(id, args)
    return `Booking with id "${id}" was updated`
  }
  public async deleteBooking(id: string): Promise<string> {
    await booking.deleteById(id)
    return `Booking with id "${id}" was deleted`
  }
  public async salesReport(): Promise<any> {
    const result: any = await booking.find({
      select: [
        'booking.id as OrderId',
        'product.id as ProdId',
        'product.amount',
        'product.name',
        'product.gender',
        'product.price',
        'product.color',
        'product.size',
        'product.category',
        'producer.name as producer',
        // 'booking.status',
      ],
      // from: "(SELECT * , (SELECT status FROM booking where product = product.id AND status = 'success') AS status FROM product) as product", // products
      from: "booking RIGHT OUTER JOIN product ON booking.product = product.id",
      where: {
        status: 'success'
      },
      join: {
        // $roj: "producer",
        // joinWith: "product"
        $roj: "producer",
        joinWith: "product"
      }
    })
    return await generateTable(result.data, 'sales', 'Report on all products that have already been sold (with "Success" status)')
  }
}