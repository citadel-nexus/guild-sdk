import { GuildManifest } from '../types/guild';
import { GuildEvent } from '../types/events';

export const sampleFinanceManifest: GuildManifest = {
  id: 'finance',
  name: 'Finance Guild',
  version: '0.1.0',
  description: 'Sample manifest for the Finance guild (public scaffold).',
  eventNamespace: 'citadel.finance',
};

export const sampleFinanceEvent: GuildEvent = {
  id: 'evt:1',
  type: 'finance.transaction.created',
  source: 'finance',
  timestamp: new Date().toISOString(),
  payload: { amount: 100, currency: 'USD' },
  metadata: { correlationId: 'corr-1', userId: 'user:1' },
};
