import { IUserAdapter } from '../interfaces/IUserAdapter';
import {
  CreateUserData,
  PaginatedResult,
  PaginationParams,
  UpdateUserData,
  UserData,
} from '../types';
import { BaseMongooseAdapter } from './BaseMongooseAdapter';
import { UserModel } from './models/User';

export class UserMongooseAdapter extends BaseMongooseAdapter implements IUserAdapter {
  async createUser(data: CreateUserData): Promise<UserData> {
    const user = new UserModel(data);
    await user.save();
    return user.toJSON() as UserData;
  }

  async findUserById(id: string): Promise<UserData | null> {
    const user = await UserModel.findById(id);
    return user ? (user.toJSON() as UserData) : null;
  }

  async findUserByEmail(email: string): Promise<UserData | null> {
    const user = await UserModel.findOne({ email });
    return user ? (user.toJSON() as UserData) : null;
  }

  async updateUser(id: string, data: UpdateUserData): Promise<UserData> {
    const user = await UserModel.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true } // Returns the updated document
    );

    if (!user) {
      throw new Error('User not found');
    }

    return user.toJSON() as UserData;
  }

  async deleteUser(id: string): Promise<void> {
    await UserModel.findByIdAndDelete(id);
  }

  async listUsers(params?: PaginationParams): Promise<PaginatedResult<UserData>> {
    const page = params?.page || 1;
    const limit = params?.limit || 10;
    const skip = (page - 1) * limit;

    const [users, total] = await Promise.all([
      UserModel.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
      UserModel.countDocuments(),
    ]);

    return {
      data: users.map((user) => user.toJSON() as UserData),
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }
}
