import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'next-auth/jwt';
import { RequestHandler } from 'next-connect';

const authMiddleware: RequestHandler<NextApiRequest & { user: jwt.JWT }, NextApiResponse> = async (
  req,
  res,
  next
) => {
  const token = await jwt.getToken({ req, secret: process.env.JWT_SECRET });

  if (token) {
    req.user = token;
    next();
  } else {
    res.status(401);
    res.end();
  }
};

export default authMiddleware;
