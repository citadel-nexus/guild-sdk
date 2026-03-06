import { AuthAdapter } from '../adapters/auth';
import { PublicUserProfile } from '../types/user';

export class MockAuth implements AuthAdapter {
  private testUser: PublicUserProfile = {
    id: 'test:user:1',
    displayName: 'Test User',
    email: 'test@example.com',
  };

  async getUserById(id: string): Promise<PublicUserProfile | null> {
    return this.testUser.id === id ? this.testUser : null;
  }

  async findUserByEmail(email: string): Promise<PublicUserProfile | null> {
    return this.testUser.email === email ? this.testUser : null;
  }

  async verifyToken(token: string): Promise<PublicUserProfile | null> {
    if (!token) return null;
    return this.testUser;
  }
}
