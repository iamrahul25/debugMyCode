const { Server } = require('socket.io');

//CORS -> Cross Origin Resource Sharing
const io = new Server(4000, {
    cors: true,
});


//Global Map of All Users Email and Socket ID
const emailToSocketIdMap = new Map();
const socketIdToEmailMap = new Map();

io.on('connection', (socket) => {
    console.log('🙋‍♂️ A User is connected! with ID: ', socket.id);

    socket.on('room:join', (data) => {
        console.log('🏠 User Joined room: ', data);
        emailToSocketIdMap.set(data.email, socket.id);
        socketIdToEmailMap.set(socket.id, data.email);

        io.to(socket.id).emit("room:join", data);
    });
});



