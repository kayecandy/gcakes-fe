import {
  VercelRequest,
  VercelResponse,
} from '@vercel/node';

type Data = {
  name: string;
};

export default function handler(req: VercelRequest, res: VercelResponse) {
  return res.status(200).json({ name: "John Doe" });
}
