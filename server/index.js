const express = require('express');
const { addMessage, getMessage, removeMessage } = require('./messageController');
const app = express();
app.use(express.json());

//SERVER PORT + ENDPOINTS
const PORT = 9999;
const status = 'is currently running on this local machine. Happy blackHatHacking!';
app.post('/api/message', addMessage);
app.get('/api/message', getMessage);
app.delete('/api/message/:id', removeMessage);
app.listen(PORT, () => console.log(`${PORT} ${status}`));
