import { EventBusAdapter, Unsubscribe } from '../adapters/event-bus';
import { GuildEvent } from '../types/events';

export class MockEventBus implements EventBusAdapter {
  private handlers: Array<{ pattern: string; fn: (e: GuildEvent) => void }> = [];
  public published: GuildEvent[] = [];

  async publish(subject: string, event: GuildEvent): Promise<void> {
    this.published.push(event);
    for (const h of this.handlers) {
      if (subject.includes(h.pattern)) {
        try { h.fn(event); } catch { /* swallow */ }
      }
    }
  }

  async subscribe(
    pattern: string,
    handler: (event: GuildEvent) => void,
  ): Promise<Unsubscribe> {
    const entry = { pattern, fn: handler };
    this.handlers.push(entry);
    return () => {
      this.handlers = this.handlers.filter((h) => h !== entry);
    };
  }

  async request(subject: string, payload: unknown): Promise<unknown> {
    return { subject, payload };
  }
}
