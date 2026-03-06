import { PublicUserProfile } from '../types/user';

export interface AuthAdapter {
  getUserById(id: string): Promise<PublicUserProfile | null>;
  findUserByEmail(email: string): Promise<PublicUserProfile | null>;
  verifyToken(token: string): Promise<PublicUserProfile | null>;
}
