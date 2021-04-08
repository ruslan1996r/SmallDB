import { Request, Response } from "express"

import { ProducerService } from "./service"
import { IEntityData } from './../../orm/types';

class ProducerController {
  constructor(private producerService: ProducerService) { }

  public getProducers = async (req: Request, res: Response): Promise<Response<IEntityData>> => {
    try {
      const producerData = req.body
      const result = await this.producerService.getProducers(producerData)
      return res.status(200).json(result)
    } catch (e) {
      return res.status(400).json({ status: 400, message: e })
    }
  }
  public createProducer = async (req: Request, res: Response): Promise<Response<IEntityData>> => {
    try {
      const producerData = req.body
      const result = await this.producerService.createProducer(producerData)
      return res.status(200).json(result)
    } catch (e) {
      return res.status(400).json({ status: 400, message: e })
    }
  }
  public updateProducer = async (req: Request, res: Response): Promise<Response<string>> => {
    try {
      const { id } = req.params
      const producerData = req.body
      const result = await this.producerService.updateProducer(id, producerData)
      return res.status(200).json(result)
    } catch (e) {
      return res.status(400).json({ status: 400, message: e })
    }
  }
  public deleteProducer = async (req: Request, res: Response): Promise<Response<string>> => {
    try {
      const { id } = req.params
      const result = await this.producerService.deleteProducer(id)
      return res.status(200).json(result)
    } catch (e) {
      return res.status(400).json({ status: 400, message: e })
    }
  }
}

export default new ProducerController(new ProducerService)