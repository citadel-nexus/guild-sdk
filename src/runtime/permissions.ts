import { Permission } from '../types/guild';

export function checkPermission(
  required: Permission,
  granted: Permission[] | undefined,
): boolean {
  if (!granted || granted.length === 0) return false;
  return granted.includes(required);
}
