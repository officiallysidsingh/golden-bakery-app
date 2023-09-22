import dotenv from "dotenv";
dotenv.config();

// Importing and then Exporting Environment Variables
export const PORT = process.env.PORT || 8000;
export const MONGODB_CONNECTION_URI = process.env.MONGODB_CONNECTION_URI;
export const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
