import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');
function sendChatMessage(message) {
    socket.emit('chat message', message);
}
function receiveChatMessages(cb) {
    socket.on('chat message', message => cb(message))
}
export { sendChatMessage, receiveChatMessages };