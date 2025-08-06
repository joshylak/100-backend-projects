import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema/typeDefs.js';
import { resolvers } from './schema/resolvers.js';

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 GraphQL Gateway ready at ${url}`);
});
