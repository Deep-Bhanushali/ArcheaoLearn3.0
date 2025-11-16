import { LangflowClient } from '@datastax/langflow-client';


const config = {
    langflowId: process.env.LANGFLOW_ID ,
    flowId: process.env.LANGFLOW_FLOW_ID ,
    apiKey: process.env.DATASTAX_API_KEY
};

export async function queryLangflow(question) {
    try {
        console.log('Querying Langflow:', question);
        const client = new LangflowClient({
            langflowId: config.langflowId, 
            apiKey: config.apiKey
        });

        const flow = client.flow(config.flowId);
        const result = await flow.run(question);
        console.log('Langflow Response:', result);

        return result.chatOutputText();
    } catch (error) {
        console.error('Error querying Langflow:', error);
        throw error;
    }
}
