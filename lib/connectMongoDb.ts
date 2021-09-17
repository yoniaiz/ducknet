import mongoose from 'mongoose';

const DB_NAME = process.env.Cypress || process.env.NODE_ENV === 'test' ? 'ducknet-test' : 'ducknet';
const PRODUCTION_CONFIG =
  process.env.NODE_ENV === 'production' ? '?retryWrites=true&w=majority' : '';

if (!process.env.MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

const MONGODB_URI = process.env.MONGODB_URI + DB_NAME + PRODUCTION_CONFIG;

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */

// @ts-expect-error
let cached = global.mongoose;

if (!cached) {
  // @ts-expect-error
  cached = global.mongoose = { conn: null, promise: null };
}

export const connectToDb = () => mongoose.connect(MONGODB_URI || '');
export const disconnectDb = () => mongoose.disconnect();

export const clearCollections = async () => {
  const { collections } = mongoose.connection;
  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany({});
  }
};
