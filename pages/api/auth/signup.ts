import nc from 'next-connect';
import type { NextApiResponse, NextApiRequest } from 'next';
import { isAxiosErrorMessage } from '@utils/typeGuards';
import axios from 'axios';

const handler = nc();

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await axios.post(`${process.env.CMS_API}/auth/local/register`, req.body);
    res.status(201).json({ message: 'Created user!' });
  } catch (e) {
    if (isAxiosErrorMessage<[{ messages: { id: string; message: string }[] }]>(e)) {
      const message = e.response?.data.message?.[0]?.messages?.[0]?.message || 'Could not register';
      res.status(400).json({ message });
    } else {
      // @ts-ignore
      const message = e?.message || e;
      res.status(500).json({ message: 'something went wrong', error: message });
    }
  }
});

export default handler;
