const socketController = (socket) => {
    console.log('cliente conectado', socket.id)
    // socket.on('event', data => { /* … */ });
    socket.on('disconnect', () => {
        console.log('cliente desconectado')
    });

    socket.on('enviar-mensaje', (payload, callback) => {
        callback(13245)
        socket.broadcast.emit('enviar-mensaje', payload)
    });
}

module.exports = {
    socketController
}