import { EventBusAdapter } from '../adapters/event-bus';
import { StorageAdapter } from '../adapters/storage';
import { AuthAdapter } from '../adapters/auth';
import { GuildEvent } from './events';

export type Permission =
  | 'events:publish'
  | 'events:subscribe'
  | 'storage:read'
  | 'storage:write'
  | 'users:read';

export interface Logger {
  info(...args: any[]): void;
  warn(...args: any[]): void;
  error(...args: any[]): void;
}

export interface GuildConfig {
  env?: Record<string, string>;
  metadata?: Record<string, unknown>;
}

export interface GuildContext {
  guildId: string;
  eventBus: EventBusAdapter;
  storage: StorageAdapter;
  auth: AuthAdapter;
  logger: Logger;
  config?: GuildConfig;
}

export interface GuildHooks {
  onActivate?: (ctx: GuildContext) => Promise<void>;
  onDeactivate?: (ctx: GuildContext) => Promise<void>;
  onUserJoin?: (ctx: GuildContext, userId: string) => Promise<void>;
  onUserLeave?: (ctx: GuildContext, userId: string) => Promise<void>;
  onEvent?: (ctx: GuildContext, event: GuildEvent) => Promise<void>;
}

export interface GuildManifest {
  id: string;
  name: string;
  version: string;
  description?: string;
  icon?: string;
  entrypoint?: string;
  eventNamespace: string;
  requiredPermissions?: Permission[];
  hooks?: GuildHooks;
}
