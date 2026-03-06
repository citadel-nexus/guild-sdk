export const GUILD_NAMESPACES: Record<string, { prefix: string; port: number }> = {
  commerce:      { prefix: 'citadel.commerce', port: 8422 },
  intelligence:  { prefix: 'citadel.intel',    port: 8000 },
  research:      { prefix: 'citadel.research', port: 8200 },
  creator:       { prefix: 'citadel.creator',  port: 8000 },
  builder:       { prefix: 'citadel.builder',  port: 8443 },
  finance:       { prefix: 'citadel.finance',  port: 8092 },
  entertainment: { prefix: 'citadel.ent',      port: 8400 },
  writers:       { prefix: 'citadel.writer',   port: 8200 },
};
