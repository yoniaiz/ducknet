import nc from "next-connect";
import UserModel from "db/users/users.model";
import { PartialUser } from "db/users/users.types";
import type { NextApiResponse } from "next";
import { connectMongoDb } from "lib/connectMongoDb";

type HandlerResponse = { users: PartialUser[] } | { message: string };
const handler = nc();

handler.get(async (_, res: NextApiResponse<HandlerResponse>) => {
  try {
    await connectMongoDb();
    const users = await UserModel.find();

    res.status(200).json({ users: users.map((user) => user.getUser()) });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "error" });
  }
});

export default handler;
