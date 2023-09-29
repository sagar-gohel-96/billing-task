import { User, users } from '@/src/data/userData';
import type { NextApiRequest, NextApiResponse } from 'next';

type Response = {
  data: User[];
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
  res.status(200).json({ data: users, message: 'users fetched successfully' });
}
