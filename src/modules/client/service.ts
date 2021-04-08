import { IEntityData } from './../../orm/types';
import { client } from "./model"

export class ClientService {
  public async getClients(args: { [key: string]: any } = {}): Promise<IEntityData> {
    const result: any = await client.find(args)
    return result.data
  }
  public async createClient(args: any = {}): Promise<IEntityData> {
    const result: IEntityData = await client.save(args)
    const newClient: IEntityData = await client.findById(result.data.insertId)
    return newClient.data
  }
  public async updateClient(id: string, args: any = {}): Promise<string> {
    await client.updateById(id, args)
    return `Client with id "${id}" was updated`
  }
  public async deleteClient(id: string): Promise<string> {
    await client.deleteById(id)
    return `Client with id "${id}" was deleted`
  }
}