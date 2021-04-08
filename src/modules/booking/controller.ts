import { Request, Response } from "express"

import { BookingService } from "./service"
import { IEntityData } from './../../orm/types';

class BookingController {
  constructor(private bookingService: BookingService) { }

  public getBookings = async (req: Request, res: Response): Promise<Response<IEntityData>> => {
    try {
      const bookingData = req.body
      const result = await this.bookingService.getBookings(bookingData)
      return res.status(200).json(result)
    } catch (e) {
      return res.status(400).json({ status: 400, message: e })
    }
  }
  public createBooking = async (req: Request, res: Response): Promise<Response<IEntityData>> => {
    try {
      const bookingData = req.body
      const result = await this.bookingService.createBooking(bookingData)
      return res.status(200).json(result)
    } catch (e) {
      return res.status(400).json({ status: 400, message: e })
    }
  }
  public updateBooking = async (req: Request, res: Response): Promise<Response<string>> => {
    try {
      const { id } = req.params
      const bookingData = req.body
      const result = await this.bookingService.updateBooking(id, bookingData)
      return res.status(200).json(result)
    } catch (e) {
      return res.status(400).json({ status: 400, message: e })
    }
  }
  public deleteBooking = async (req: Request, res: Response): Promise<Response<string>> => {
    try {
      const { id } = req.params
      const result = await this.bookingService.deleteBooking(id)
      return res.status(200).json(result)
    } catch (e) {
      return res.status(400).json({ status: 400, message: e })
    }
  }
}

export default new BookingController(new BookingService)