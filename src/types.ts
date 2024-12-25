export type AddDollarSign<T> = {
  [K in keyof T as `$${string & K}`]: T[K]
}

export enum Service {
  jenesei_id = 'jenesei_id'
}
