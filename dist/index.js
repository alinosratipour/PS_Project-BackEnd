"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const client_1 = require("@prisma/client"); // Import Prisma Client
const schema_1 = __importDefault(require("./resolvers/schema")); // Import your GraphQL type definitions
const resolvers_1 = __importDefault(require("./resolvers")); // Import your resolvers
const prisma = new client_1.PrismaClient(); // Initialize Prisma Client
const server = new apollo_server_express_1.ApolloServer({
    typeDefs: schema_1.default,
    resolvers: resolvers_1.default,
    context: () => ({ prisma }), // Provide Prisma Client to Apollo Server context
});
const app = (0, express_1.default)();
async function startServer() {
    await server.start();
    server.applyMiddleware({ app });
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}${server.graphqlPath}`);
    });
}
startServer();
//# sourceMappingURL=index.js.map