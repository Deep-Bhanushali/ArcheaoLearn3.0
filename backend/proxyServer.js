import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { queryLangflow } from './index.js'; // Import from index.js

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/query', async (req, res) => {
    try {
        const { question } = req.body;
        if (!question) return res.status(400).json({ error: 'Question is required' });

        console.log('Received question:', question);
        const response = await queryLangflow(question);
        res.json({ response });
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({ error: 'Failed to query Langflow' });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
});
