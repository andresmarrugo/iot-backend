
module.exports = (io) => {
    //console.log('IO: ', io);
    // put any other code that wants to use the io variable
    // in here
    var messages=['Hola desde express con Sockets!'];
    io.on('connect', socket => {
    console.log('Alguien se ha conectado con Sockets'+ socket.id);
    socket.emit('messages', messages);

    socket.on('nuevo-mensaje', function(data) {
        console.log("desde el cliente enviaron: ",data);
        });

    });

};