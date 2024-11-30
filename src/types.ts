export type AddDollarSign<T> = {
  [K in keyof T as `$${string & K}`]: T[K]
}
