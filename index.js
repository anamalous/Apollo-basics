import { ApolloServer } from "apollo-server";
import typeDefs from "./schema.js";
import resolvers from "./resolvers.js";
import Book from "./books.js";
import User from "./users.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    user:new User(),
    book:new Book()
  }),
});

server.listen().then(() => {
  console.log(`Server running on port 4000`);
});