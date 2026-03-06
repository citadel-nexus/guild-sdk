export interface GuildEvent {
  id: string;
  type: string;
  source: string;
  timestamp: string;
  payload: Record<string, unknown>;
  metadata?: {
    correlationId?: string;
    userId?: string;
  };
}
