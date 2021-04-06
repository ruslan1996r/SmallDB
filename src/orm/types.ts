export interface IEntity {
  data: [],
  entityName: string,
  conditions: (args: IArgs) => string,
  computedProps: (args: IArgs) => string,
  eager: (entityName: string) => Promise<this>,
  find: (args: IArgs) => Promise<unknown>,
  findById: (id: number | string, args: IArgs) => Promise<unknown>
}

export interface IArgs {
  select?: string[],
  where?: {
    [key: string]: any
  },
  computed?: {
    [key: string]: any
  },
  [key: string]: any
}