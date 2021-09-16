import { connectToDb } from '@lib/connectMongoDb';
import { NextApiRequest, NextApiResponse } from 'next';
import { RequestHandler } from 'next-connect';

const database: RequestHandler<NextApiRequest, NextApiResponse> = async (_, _1, next) => {
  await connectToDb();
  next();
};

export default database;
