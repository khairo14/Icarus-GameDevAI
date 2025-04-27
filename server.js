const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { chatWithAI } = require('./controllers/aiController');
const { startWebSocketServer } = require('./ws/wsServer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// HTTP API
app.post('/api/ask', async (req, res) => {
    const { prompt, type } = req.body;
    const response = await chatWithAI(prompt, type);
    res.json({ response });
});

// Serve frontend
app.use(express.static('public'));

// WebSocket Server
startWebSocketServer(app);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
