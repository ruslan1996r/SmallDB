import { IEntityData } from './../../orm/types';
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
}