export class Api {
  static #server = 'http://localhost:4000'
  static client = {
    get: {
      url: this.#server + "/client/all",
      options: { method: "POST" }
    },
    create: (body) => {
      return {
        url: this.#server + "/client/",
        options: {
          method: "POST",
          body
        }
      }
    },
    update: (id) => ({ url: this.#server + "/client/" + id, method: "POST" }),
    delete: (id) => ({ url: this.#server + "/client/" + id, method: "DELETE" }),
  }
  static booking = {
    get: {
      url: this.#server + "/booking/all",
      options: { method: "POST" }
    }
  }
  static product = {
    get: {
      url: this.#server + "/product/all",
      options: { method: "POST" }
    }
  }
  static producer = {
    get: {
      url: this.#server + "/producer/all",
      options: { method: "POST" }
    }
  }
  static category = {
    get: {
      url: this.#server + "/category/all",
      options: { method: "POST" }
    }
  }
  static productRate = {
    get: {
      url: this.#server + "/product_rate/all",
      options: { method: "POST" }
    }
  }
}

export class ReportApi { }