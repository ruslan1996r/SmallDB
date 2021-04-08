import { IEntityData } from './../../orm/types';
import { producer } from "./model"

export class ProducerService {
  public async getProducers(args: { [key: string]: any } = {}): Promise<IEntityData> {
    const result: any = await producer.find(args)
    return result.data
  }
  public async createProducer(args: any = {}): Promise<IEntityData> {
    const result: IEntityData = await producer.save(args)
    const newProducer: IEntityData = await producer.findById(result.data.insertId)
    return newProducer.data
  }
  public async updateProducer(id: string, args: any = {}): Promise<string> {
    await producer.updateById(id, args)
    return `Producer with id "${id}" was updated`
  }
  public async deleteProducer(id: string): Promise<string> {
    await producer.deleteById(id)
    return `Producer with id "${id}" was deleted`
  }
}