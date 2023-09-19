import mongoose from "mongoose";

// Environment Variable Imports
import { MONGODB_CONNECTION_URI } from "../utils/env-variables.js";

export const connectMongoDB = async () => {
  try {
    const connect = await mongoose.connect(MONGODB_CONNECTION_URI);
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
