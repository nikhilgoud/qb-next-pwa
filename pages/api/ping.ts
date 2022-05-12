// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';

const ping = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200);
};

export default ping;
