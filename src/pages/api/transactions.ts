import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../server/prisma'; // Ensure Prisma is set up

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { amount, userId } = req.body;
    try {
      const transaction = await prisma.transaction.create({
        data: {
          amount,
          type: 'credit', // or 'debit'
          userId,
        },
      });
      res.status(201).json(transaction);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
