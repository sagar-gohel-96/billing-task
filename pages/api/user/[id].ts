import { User, users } from "@/src/data/userData";
import type { NextApiRequest, NextApiResponse } from "next";

type Response = {
  data: User[] | [];
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const id = Number(req.query.id);

  try {
    if (id) {
      const user = users?.filter((user: User) => user.id === id);
      res
        .status(200)
        .json({ data: user, message: "users fetched successfully" });
    }
  } catch (err) {
    res.status(200).json({ data: [], message: "user not found" });
  }
}
