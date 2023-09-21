// Express App Imports
import express from "express";
import cors from "cors";

// MongoDB Imports
import { connectMongoDB } from "./utils/dbConnection.js";

// Environment Variable Imports
import { PORT } from "./utils/env-variables.js";

// GraphQL Imports
import { expressMiddleware } from "@apollo/server/express4";
import createGraphQLServer from "./graphql/index.js";

async function graphqlInit() {
  const app = express();

  // MongoDB Connection
  await connectMongoDB();

  // Allowing JSON Requests And CORS On All Endpoints
  app.use(express.json());
  app.use(cors());

  //Create GraphQL Server
  const gqlServer = await createGraphQLServer();

  app.get("/", (req, res) => {
    res.json({ message: "Server is up and running" });
  });

  app.use("/graphql", expressMiddleware(gqlServer));

  app.listen(PORT, () => {
    console.log(`Server ready at PORT: ${PORT}`);
  });
}

graphqlInit();
