const io = require('socket.io')();

io.on('connection', (client) => {
  client.on('chat message', message => {
    io.emit('chat message', message)
  });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
