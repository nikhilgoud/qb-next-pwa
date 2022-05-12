// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import * as data from '@public/db.json';

const questions = (req: NextApiRequest, res: NextApiResponse) => {
  const slug = req.query.slug as string[];

  const filtered = data.questions.filter((q) => slug[slug.length - 1] === q.id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `questions with identifier: ${slug.join(', ')} not found.` });
  }
};

export default questions;
