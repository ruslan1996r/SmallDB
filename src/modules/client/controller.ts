import { Request, Response } from "express"

import { ClientService } from "./service"
import { IEntityData } from './../../orm/types';

class ClientController {
  constructor(private clientService: ClientService) { }

  public getClients = async (req: Request, res: Response): Promise<Response<IEntityData>> => {
    try {
      const clientData = req.body
      const result = await this.clientService.getClients(clientData)
      return res.status(200).json(result)
    } catch (e) {
      return res.status(400).json({ status: 400, message: e })
    }
  }
  public createClient = async (req: Request, res: Response): Promise<Response<IEntityData>> => {
    try {
      const clientData = req.body
      const result = await this.clientService.createClient(clientData)
      return res.status(200).json(result)
    } catch (e) {
      return res.status(400).json({ status: 400, message: e })
    }
  }
  public updateClient = async (req: Request, res: Response): Promise<Response<string>> => {
    try {
      const { id } = req.params
      const clientData = req.body
      const result = await this.clientService.updateClient(id, clientData)
      return res.status(200).json(result)
    } catch (e) {
      return res.status(400).json({ status: 400, message: e })
    }
  }
  public deleteClient = async (req: Request, res: Response): Promise<Response<string>> => {
    try {
      const { id } = req.params
      const result = await this.clientService.deleteClient(id)
      return res.status(200).json(result)
    } catch (e) {
      return res.status(400).json({ status: 400, message: e })
    }
  }
}

export default new ClientController(new ClientService)