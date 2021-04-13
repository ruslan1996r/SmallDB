export class Api {
  static #server = 'http://localhost:4000'

  static client = {
    get: {
      url: this.#server + "/client/all",
      options: {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
      }
    },
    create: (body) => ({
      url: this.#server + "/client",
      options: {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
    }),
    update: (id, body) => ({
      url: this.#server + "/client/" + id,
      options: {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
    }),
    delete: (id) => ({ url: this.#server + "/client/" + id, options: { method: "DELETE" } }),
  }
  static booking = {
    get: {
      url: this.#server + "/booking/all",
      options: {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
      }
    },
    create: (body) => ({
      url: this.#server + "/booking",
      options: {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
    }),
    update: (id, body) => ({
      url: this.#server + "/booking/" + id,
      options: {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
    }),
    delete: (id) => ({ url: this.#server + "/booking/" + id, options: { method: "DELETE" } }),
  }
  static product = {
    get: {
      url: this.#server + "/product/all",
      options: {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
      }
    },
    create: (body) => ({
      url: this.#server + "/product",
      options: {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
    }),
    update: (id, body) => ({
      url: this.#server + "/product/" + id,
      options: {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
    }),
    delete: (id) => ({ url: this.#server + "/product/" + id, options: { method: "DELETE" } }),
  }
  static producer = {
    get: {
      url: this.#server + "/producer/all",
      options: {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
      }
    },
    create: (body) => ({
      url: this.#server + "/producer",
      options: {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
    }),
    update: (id, body) => ({
      url: this.#server + "/producer/" + id,
      options: {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
    }),
    delete: (id) => ({ url: this.#server + "/producer/" + id, options: { method: "DELETE" } }),
  }
  static category = {
    get: {
      url: this.#server + "/category/all",
      options: {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
      }
    },
    create: (body) => ({
      url: this.#server + "/category",
      options: {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
    }),
    update: (id, body) => ({
      url: this.#server + "/category/" + id,
      options: {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
    }),
    delete: (id) => ({ url: this.#server + "/category/" + id, options: { method: "DELETE" } }),
  }
  static productRate = {
    get: {
      url: this.#server + "/product_rate/all",
      options: {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
      }
    },
    create: (body) => ({
      url: this.#server + "/product_rate",
      options: {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
    }),
    update: (id, body) => ({
      url: this.#server + "/product_rate/" + id,
      options: {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
    }),
    delete: (id) => ({ url: this.#server + "/product_rate/" + id, options: { method: "DELETE" } }),
  }
}

export class ReportApi { }