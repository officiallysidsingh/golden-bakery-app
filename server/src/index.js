import express from "express";
import { expressMiddleware } from "@apollo/server/express4";

// GraphQL Imports
import createGraphQLServer from "./graphql/index.js";

async function graphqlinit() {
  const app = express();
  const PORT = process.env.PORT || 8000;

  app.use(express.json());

  //Create GraphQL Server
  const gqlServer = await createGraphQLServer();

  app.get("/", (req, res) => {
    res.json({ message: "Server is up and running" });
  });

  app.use("/graphql", expressMiddleware(gqlServer));

  app.listen(PORT, () => {
    console.log(`Server ready at: https://localhost:${PORT}`);
  });
}

graphqlinit();
