const { Server } = require('socket.io');

//CORS -> Cross Origin Resource Sharing
const io = new Server(4000, {
    cors: true,
});


//Global Map of All Users Email and Socket ID
// const emailToSocketIdMap = new Map();
// const socketIdToEmailMap = new Map();

// emailToSocketIdMap.set(data.email, socket.id);
// socketIdToEmailMap.set(socket.id, data.email);

//Waiting Users Set:
let waitingUsers = new Set();

io.on('connection', (socket) => {

    console.log('😃A User Connected! with Socket ID: ', socket.id);


    socket.on('find-pair-client', (data) =>{

        console.log("Find Pair Client! \n");
        console.log("Data: ",data);

        console.log("Waiting Users Set: ",waitingUsers);
        
        if(waitingUsers.size==0){
            waitingUsers.add(socket.id);
            console.log("No user found! in Set. (Wait)");
        }
        else{
            //Pick the First user in the Set. 
            const [otherUserId] = waitingUsers;
            console.log("Other User ID: ", otherUserId);

            //Remove the User from the Waiting Users Set.
            waitingUsers.delete(otherUserId);

            io.to(otherUserId).emit("take-offer-server", {offer: data.offer, otherUserId: socket.id});
        }

        console.log("Waiting Users Set (After Insertion!): ",waitingUsers);

    })


    socket.on('send-answer-client', (data) =>{

        console.log("Send Answer Client! \n")
        // console.log(data);
        io.to(data.otherUserId).emit("take-answer-server", {answer: data.answer, otherUserId: socket.id});

    });


    socket.on("nego-needed-client", (data) =>{
        console.log("Nego Needed Client! \n");
        console.log("Other User ID: ", data.otherUserId);
        io.to(data.otherUserId).emit("accept-nego-server", {offer: data.offer, otherUserId: socket.id});
    });

    socket.on("nego-answer-client", (data)=>{
        console.log("Nego Answer Client! \n");
        console.log("Other User ID: ", data.otherUserId);
        io.to(data.otherUserId).emit("nego-answer-server", {answer: data.answer, otherUserId: socket.id});
    })


    //When a User Disconnects--------------------------------------------
    socket.on('disconnect', () => {
        console.log('😥A User disconnected! with Socket ID:', socket.id);

        //Remove the User from the Waiting Users Set.
        waitingUsers.delete(socket.id);
    });

});





