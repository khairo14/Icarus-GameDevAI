const WebSocket = require('ws');
const { chatWithAI } = require('../controllers/aiController');  // Ensure this file is correctly implemented

function startWebSocketServer(app) {
    const server = app.listen(3001, () => console.log('WebSocket server running on port 3001'));
    const wss = new WebSocket.Server({ server });

    wss.on('connection', (ws) => {
        console.log('Client connected');
        ws.on('message', async (message) => {
            try {
                const { prompt, type } = JSON.parse(message);
                console.log('Received prompt:', prompt);
                const response = await chatWithAI(prompt, type);
                ws.send(JSON.stringify({ response }));
            } catch (error) {
                console.error('Error during WebSocket message processing:', error);
                ws.send(JSON.stringify({ response: 'Error processing your request' }));
            }
        });
    });
}

module.exports = { startWebSocketServer };
