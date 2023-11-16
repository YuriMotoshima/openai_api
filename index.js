const config = require('./data_config.js');
const OpenAI = require('openai');

const openai = new OpenAI();

async function fetchData(){
    const { Configuration, OpenAIApi } = openai;
    const configuration = new Configuration({
        organization: config.orgId,
        apiKey: config.apiKey
    });
    const openaiInstance = new OpenAIApi(configuration);
    const response = await openaiInstance.listEngines();
    console.log(`Response: ${response}`);
}

// fetchData();


console.log(`ORG: ${config.orgId}`);
console.log(`APIKEY: ${config.orgId}`);