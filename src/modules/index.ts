import { booking } from "./booking/model"
import { client } from "./client/model"
import { producer } from "./producer/model"
// import { Category } from "./category/model"
// import { Product } from "./product/model"
// import { ProductRate } from "./product_rate/model"

function InitEntities(): void {
  // client,
  // console.log("producer", producer)
  // client,
  const entities = [producer] //, [booking, producer]
  entities.forEach(e => e.registerEntity())
  // client.registerEntity()
  // booking.registerEntity()
  // // return {
  // client: client.registerEntity()
  // client,
  // client: new Client(),
  // producer: new Producer()
  // }
  // const client = new Client()
  // const product = new Product()
  // const booking = new Booking()
  // const producer = new Producer()
  // const category = new Category()
  // const product_rate = new ProductRate()
}
// const client = new Client()
// const product = new Product()
// const booking = new Booking()
// const producer = new Producer()
// const category = new Category()
// const product_rate = new ProductRate()



export {
  InitEntities
  // client,
  // product,
  // booking,
  // producer,
  // category,
  // product_rate
}