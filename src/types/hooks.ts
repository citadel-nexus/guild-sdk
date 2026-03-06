import { GuildContext } from './guild';
import { GuildEvent } from './events';

export type OnActivate = (ctx: GuildContext) => Promise<void>;
export type OnDeactivate = (ctx: GuildContext) => Promise<void>;
export type OnUserJoin = (ctx: GuildContext, userId: string) => Promise<void>;
export type OnUserLeave = (ctx: GuildContext, userId: string) => Promise<void>;
export type OnEvent = (ctx: GuildContext, event: GuildEvent) => Promise<void>;
