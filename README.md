# openai_api
For instalation to use :
```js
npm install openai@^4.0.0
npm install dotenv
```

For import your environments variables, do you need to create this one file:

data_config.js
```js
import dotenv from 'dotenv';

dotenv.config();

export const orgId = process.env.OPENAI_ORG_ID;
export const apiKey = process.env.OPENAI_API_KEY;
```

Look this import, for work well this code you need add in packge.json one type:modules:
```js
{
  "type": "module",
  "name": "openai_api",
  "version": "1.0.0",
  "description": "teste api open ai",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/YuriMotoshima/openai_api.git"
  },
  "author": "Yuri Motoshima",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/YuriMotoshima/openai_api/issues"
  },
  "homepage": "https://github.com/YuriMotoshima/openai_api#readme",
  "dependencies": {
    "dotenv": "^16.3.1",
    "openai": "^4.0.0"
  }
}
```

After all configuration, we are can start code.

In your index.js write this:
```js
import OpenAI from "openai";
import { orgId, apiKey } from "./data_config.js";

const openai = new OpenAI({
  apiKey: apiKey,
});

console.log(orgId)
```
