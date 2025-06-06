import mongoose from 'mongoose';

export abstract class BaseMongooseAdapter {
  protected connection: typeof mongoose;

  constructor() {
    this.connection = mongoose;
  }

  async connect(): Promise<void> {
    const mongoUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017/your_database';
    await this.connection.connect(mongoUrl);
  }

  async disconnect(): Promise<void> {
    await this.connection.disconnect();
  }
}
