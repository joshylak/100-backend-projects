    import express from "express";
    import { ApolloServer } from "apollo-server-express";
    import { typeDefs } from "./schema/typeDefs.js";
    import { resolvers } from "./resolvers/postResolvers.js";

    const app = express();
    const server = new ApolloServer({ typeDefs, resolvers });

    async function startServer() {
    await server.start();
    server.applyMiddleware({ app });

    const PORT = 4000;
    app.listen(PORT, () => {
        console.log(`🚀 Server running at http://localhost:${PORT}${server.graphqlPath}`);
    });
    }

    startServer();
