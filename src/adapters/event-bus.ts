import { GuildEvent } from '../types/events';

export type Unsubscribe = () => void;

export interface EventBusAdapter {
  publish(subject: string, event: GuildEvent): Promise<void>;
  subscribe(pattern: string, handler: (event: GuildEvent) => void): Promise<Unsubscribe>;
  request(subject: string, payload: unknown, timeoutMs?: number): Promise<unknown>;
}
