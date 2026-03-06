export type FilterSpec = { [key: string]: any } | string;

export interface StorageAdapter {
  query<T = any>(table: string, filter?: FilterSpec): Promise<T[]>;
  insert<T = any>(table: string, row: Partial<T>): Promise<T>;
  update<T = any>(table: string, id: string, patch: Partial<T>): Promise<T>;
  delete(table: string, id: string): Promise<void>;
}
