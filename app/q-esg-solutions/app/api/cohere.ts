import type { NextApiRequest, NextApiResponse } from 'next';
import { generateText } from '../../services/cohereService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { stocks } = req.body; // Get stocks data from request body
  if (!stocks || stocks.length === 0) {
    return res.status(400).json({ error: 'Stocks data is required' });
  }

  try {
    const prompts = stocks.map((stock: any) => `For the company ${stock.name} with ESG score ${stock.esg_score}, which uses animal testing: ${stock.esg_index.animalTesting}, coal: ${stock.esg_index.coal}, fur leather: ${stock.esg_index.furLeather}, GMO: ${stock.esg_index.gmo}, palm oil: ${stock.esg_index.palmOil}, nuclear: ${stock.esg_index.nuclear}, and pesticides: ${stock.esg_index.pesticides}, generate a cause and effect statement regarding its environmental impact.`);

    const generatedTexts = await Promise.all(prompts.map((prompt: any) => generateText(prompt)));
    res.status(200).json({ texts: generatedTexts });
  } catch (error) {
    res.status(500).json({ error: 'Error generating text' });
  }
}

// import type { NextApiRequest, NextApiResponse } from 'next';
// import { generateText } from '../../services/cohereService';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { prompt } = req.body;
//   if (!prompt) {
//     return res.status(400).json({ error: 'Prompt is required' });
//   }

//   try {
//     const generatedText = await generateText(prompt);
//     res.status(200).json({ text: generatedText });
//   } catch (error) {
//     res.status(500).json({ error: 'Error generating text' });
//   }
// }
