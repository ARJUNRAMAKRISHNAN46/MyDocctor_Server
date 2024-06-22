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
    const userId: string = socket.handshake.query.userId as string;
    if (userId) {
      userSocketMap[userId] = socket.id;
    }

    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("new message", (newMessage) => {
      const recieverSocketId = getRecieverSocketId(newMessage?.obj?.recieverId);
      if (recieverSocketId) {
        io.to(recieverSocketId).emit("newMessage", newMessage?.obj);
      }
    });

    socket.on("disconnec", (id: string) => {
      delete userSocketMap[id];
      io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });

    socket.on("attendCall", (userId: string) => {
      const recieverSocketId = getRecieverSocketId(userId);
      console.log("🚀 ~ socket.on ~ recieverSocketId:", recieverSocketId);
    });

    socket.on("videoCall", (data) => {
      console.log("🚀 ~ socket.on ~ data:", data)
      const targetSocketId: any = userSocketMap[data.recieverId];
      console.log("targetSocketId: ", targetSocketId);
      io.to(targetSocketId).emit("incomingCall", data);
    });
  });
};

export default connectSocketIo;
