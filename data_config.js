import dotenv from 'dotenv';

dotenv.config();

export const orgId = process.env.OPENAI_ORG_ID;
export const apiKey = process.env.OPENAI_API_KEY;
