import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.get('/api/products', async (req, res) => {
    try {
        const response = await fetch('https://piperedge.com/screening-test/assets/json/products.json');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'fetching data error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
