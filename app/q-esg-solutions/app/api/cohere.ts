// pages/api/cohere.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { generateText } from '../../services/cohereService';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const generatedText = await generateText(prompt);
    res.status(200).json({ text: generatedText });
  } catch (error) {
    res.status(500).json({ error: 'Error generating text' });
  }
}
