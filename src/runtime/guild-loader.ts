import { GuildManifest, GuildContext } from '../types/guild';

export function validateManifest(m: GuildManifest): string[] {
  const errs: string[] = [];
  if (!m.id) errs.push('manifest.id is required');
  if (!m.name) errs.push('manifest.name is required');
  if (!m.eventNamespace) errs.push('manifest.eventNamespace is required');
  return errs;
}

export function loadGuild(
  manifest: GuildManifest,
  ctx: GuildContext,
): { manifest: GuildManifest; ctx: GuildContext } {
  const errs = validateManifest(manifest);
  if (errs.length) {
    throw new Error('Invalid manifest: ' + errs.join('; '));
  }
  return { manifest, ctx };
}
