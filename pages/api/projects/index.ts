import nc from "next-connect";
import all from "middlewares/all";
import UserModel from "db/users/users.model";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = nc<NextApiRequest, NextApiResponse>();
handler.use(all);

handler.get(async (req, res) => {
  const users = await UserModel.find({});
  res.status(200).json({ message: "get request" });
});

handler.post((req, res) => {
  console.log("this is on get");
  res.status(200).json({ message: "get post" });
});

export default handler;
