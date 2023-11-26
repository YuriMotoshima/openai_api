import OpenAI from "openai";
import { orgId, apiKey } from "./data_config.js";

const openai = new OpenAI({
  apiKey: apiKey,
});

console.log(orgId)