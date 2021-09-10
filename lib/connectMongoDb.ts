import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
//@ts-ignore
let cached = global.mongoose;

if (!cached) {
  //@ts-ignore
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectMongoDb() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI || "").then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

const clearCollections = async () => {
  const { collections } = mongoose.connection;
  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany({});
  }
};
const closeConnection = async () => {
  if (cached) {
    await mongoose.disconnect();
    cached = null;
  }
};
export { connectMongoDb, closeConnection, clearCollections };
