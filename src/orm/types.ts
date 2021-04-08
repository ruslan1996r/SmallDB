type Partial<T> = {
  [P in keyof T]?: T[P];
};
interface EntityDataResult {
  fieldCount: number,
  affectedRows: number,
  insertId: number,
  serverStatus: number,
  warningCount: number,
  message: string,
  protocol41: boolean,
  changedRows: number,
}
export interface IEntity {
  data: [],
  entityName: string,
  where: (args: IArgs) => string,
  computedProps: (args: IArgs) => string,
  eager: (entityName: string) => Promise<this>,
  find: (args: IArgs) => Promise<unknown>,
  findById: (id: number | string, args: IArgs) => Promise<unknown>,
  // createCondition:
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

export type IEntityData = Partial<EntityDataResult> & { [key: string]: any, data: any }