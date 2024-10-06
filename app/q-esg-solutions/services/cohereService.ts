const { CohereClientV2 } = require('cohere-ai');

const cohere = new CohereClientV2({
  token: process.env.COHERE_API_KEY || '',
});

export const generateText = async (prompt: string) => {
  try {
    const response = await cohere.generate({
      model: 'command-xlarge-nightly',
      prompt: prompt,
      max_tokens: 300,
      temperature: 0.7,
    });

    return response.body.generations[0].text;
  } catch (error) {
    console.error('Error generating text from Cohere API:', error);
    throw new Error('Error generating text from Cohere');
  }
};