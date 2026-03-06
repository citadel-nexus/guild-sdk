import { StorageAdapter } from '../adapters/storage';

export class MockStorage implements StorageAdapter {
  private store: Map<string, Map<string, any>> = new Map();

  async query<T = any>(table: string): Promise<T[]> {
    const t = this.store.get(table);
    if (!t) return [];
    return Array.from(t.values()) as T[];
  }

  async insert<T = any>(table: string, row: Partial<T>): Promise<T> {
    const id = String(Math.floor(Math.random() * 1e9));
    let t = this.store.get(table);
    if (!t) { t = new Map(); this.store.set(table, t); }
    const full = { id, ...row } as T;
    t.set(id, full);
    return full;
  }

  async update<T = any>(table: string, id: string, patch: Partial<T>): Promise<T> {
    const t = this.store.get(table);
    if (!t || !t.has(id)) throw new Error('not found');
    const updated = { ...t.get(id), ...patch };
    t.set(id, updated);
    return updated;
  }

  async delete(table: string, id: string): Promise<void> {
    this.store.get(table)?.delete(id);
  }
}
