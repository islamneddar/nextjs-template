import mongoose, { Document, Schema } from 'mongoose';

import { UserData } from '../../types';

// Interface for the User document
export interface IUserDocument extends Document, Omit<UserData, 'id'> {
  // id is handled by _id in MongoDB
}

// Schema definition
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // This will add createdAt and updatedAt fields automatically
    toJSON: {
      transform: (_, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

// Create and export the model
export const UserModel = mongoose.model<IUserDocument>('User', userSchema);
