import {
  CreateUserData,
  PaginatedResult,
  PaginationParams,
  UpdateUserData,
  UserData,
} from '../types';

export interface IUserAdapter {
  createUser(data: CreateUserData): Promise<UserData>;
  findUserById(id: string): Promise<UserData | null>;
  findUserByEmail(email: string): Promise<UserData | null>;
  updateUser(id: string, data: UpdateUserData): Promise<UserData>;
  deleteUser(id: string): Promise<void>;
  listUsers(params?: PaginationParams): Promise<PaginatedResult<UserData>>;
}
