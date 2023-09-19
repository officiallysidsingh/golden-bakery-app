import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_CONNECTION_URI);
    console.log(
      "Database Connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
