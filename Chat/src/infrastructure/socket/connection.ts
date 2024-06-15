// import { Server as SocketIOServer, Socket } from "socket.io";
import { Socket } from "socket.io";
import { Server } from "http";
import { config } from "dotenv";
config();

const socket = require("socket.io");

const connectSocketIo = (Server: Server) => {
  console.log(process.env.FRONT_END_URL);
  const io: Socket = socket(Server, {
    cors: {
      origin: [process.env.FRONT_END_URL],
      credentials: true,
    },
  });

  const userSocketMap: { [key: string]: string } = {};

  const getRecieverSocketId = (recieverId) => {
    return userSocketMap[recieverId];
  };

  io.on("connection", (socket: Socket) => {
    console.log(`Socket connected`, socket.id);
    const userId: string = socket.handshake.query.userId as string;
    if (userId) {
      userSocketMap[userId] = socket.id;
    }

    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("new message", (newMessage) => {
      const recieverSocketId = getRecieverSocketId(newMessage?.obj?.recieverId);
      console.log("🚀 ~ socket.on ~ recieverSocketId:", recieverSocketId)
    if (recieverSocketId) {
      io.to(recieverSocketId).emit("newMessage", newMessage?.obj);
    }
      console.log("🚀 ~ socket.on ~ newMessage:", newMessage);
     
    });

    socket.on("disconnec", (id: string) => {
      delete userSocketMap[id];
      io.emit("getOnlineUsers", Object.keys(userSocketMap));
      console.log(`Socket disconnect`, id, 87);
    });

    socket.on("videoCall", (data) => {
      console.log("hello chat in Videochat");
      const targetSocketId: any = userSocketMap[data.userId];
      console.log(targetSocketId);
      io.to(targetSocketId).emit("incomingCall", data);
    });
  });
};

export default connectSocketIo;

// import { Server as SocketIOServer, Socket } from "socket.io";
// import { Server } from "http";

// const socket = require("socket.io");

// const connectionSocketIo = (server: Server) => {
//   console.log("inside socket server");
//   const io: Socket = socket(server, {
//     cors: {
//       origin: "*",
//       credentials: true,
//     },
//   });

//   const userSocketMap: { [key: string]: string } = {};

//   io.on("connection", (socket: Socket) => {
//     console.log(`Socket connected`);
//     const userId: string = socket.handshake.query.userId as string;
//     if (userId != "undefined") {
//       userSocketMap[userId] = socket.id;
//     }

//     io.emit("getOnlineUsers", Object.keys(userSocketMap));
//     socket.on("join chat", (room) => {
//       socket.join(room);
//       console.log("user joined", room);
//     });

//     socket.on("new message", (newMessage) => {
//       console.log(newMessage, "new message");

//       const chat = newMessage?.chatId;
//       console.log("🚀 ~ socket.on ~ chat:", chat);
//       io.to(chat).emit("message recieved", newMessage);
//     });

//     socket.on("disconnect", () => {
//       delete userSocketMap[userId];
//       console.log(`Socket disconnected`);
//     });
//   });
// };

// export default connectionSocketIo;
