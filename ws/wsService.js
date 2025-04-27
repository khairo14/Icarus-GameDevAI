const WebSocket = require('ws');
const { chatWithAI } = require('../controllers/aiController');

function startWebSocketServer(app) {
    const server = app.listen(3001, () => console.log('WebSocket server running'));
    const wss = new WebSocket.Server({ server });

    wss.on('connection', (ws) => {
        ws.on('message', async (message) => {
            const { prompt, type } = JSON.parse(message);
            const response = await chatWithAI(prompt, type);
            ws.send(JSON.stringify({ response }));
        });
    });
}

module.exports = { startWebSocketServer };
