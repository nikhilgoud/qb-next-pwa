// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import * as data from '@public/db.json';

const questions = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(data.skill);
};

export default questions;
