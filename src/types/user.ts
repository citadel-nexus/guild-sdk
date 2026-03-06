export interface PublicUserProfile {
  id: string;
  displayName?: string;
  email?: string;
  avatarUrl?: string;
  // Intentionally omitted: XP/TP/CAPS/SmartBank — private IP.
  metadata?: Record<string, unknown>;
}
