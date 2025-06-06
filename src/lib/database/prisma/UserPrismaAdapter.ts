import { IUserAdapter } from '../interfaces/IUserAdapter';
import {
  CreateUserData,
  PaginatedResult,
  PaginationParams,
  UpdateUserData,
  UserData,
} from '../types';
import { BasePrismaAdapter } from './BasePrismaAdapter';

export class UserPrismaAdapter extends BasePrismaAdapter implements IUserAdapter {
  async createUser(data: CreateUserData): Promise<UserData> {
    return this.prisma.user.create({
      data,
    });
  }

  async findUserById(id: string): Promise<UserData | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async findUserByEmail(email: string): Promise<UserData | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async updateUser(id: string, data: UpdateUserData): Promise<UserData> {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async deleteUser(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: { id },
    });
  }

  async listUsers(params?: PaginationParams): Promise<PaginatedResult<UserData>> {
    const page = params?.page || 1;
    const limit = params?.limit || 10;
    const skip = (page - 1) * limit;

    const [users, total] = await Promise.all([
      this.prisma.user.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.user.count(),
    ]);

    return {
      data: users,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }
}
