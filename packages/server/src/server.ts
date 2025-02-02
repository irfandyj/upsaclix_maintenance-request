import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./graphql/schema";
import { rootResolvers } from "./graphql/resolvers";

const server = express();

// setup graphql
server.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: rootResolvers,
    graphiql: true,
  })
);

export default server;