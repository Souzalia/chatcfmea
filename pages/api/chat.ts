import type { NextApiRequest, NextApiResponse } from 'next';
import { makeChain } from '@/utils/makechain';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { question, history } = req.body;

  // só aceita POST
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  if (!question) {
    return res.status(400).json({ message: 'No question in the request' });
  }

  // sanitização básica
  const sanitizedQuestion = question.trim().replaceAll('\n', ' ');

  try {
    // 🔥 cria (ou reutiliza) a chain em memória
    const chain = await makeChain();

    // pergunta usando histórico
    const response = await chain.call({
      question: sanitizedQuestion,
      chat_history: history || [],
    });

    res.status(200).json(response);
  } catch (error: any) {
    console.error('error', error);
    res.status(500).json({ error: error.message || 'Something went wrong' });
  }
}
