//import { UserMongooseAdapter } from './mongoose/UserMongooseAdapter';
import { UserPrismaAdapter } from './prisma/UserPrismaAdapter';

export * from './types';
export * from './interfaces/IUserAdapter';
export * from './prisma/BasePrismaAdapter';
export * from './prisma/UserPrismaAdapter';

export const userDb = new UserPrismaAdapter();
//export const userDbMongoose = new UserMongooseAdapter();
