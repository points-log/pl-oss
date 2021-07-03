import { Collection } from 'mongodb';
import { LoggerService } from '@pl-oss/domain';

export class MongoDBLoggerService implements LoggerService {
  constructor(private readonly collection: Collection) {}

  async log(message: string, payload?: unknown, timestamp = new Date()): Promise<void> {
    await this.collection.insertOne({ message, payload, timestamp });
  }
}
