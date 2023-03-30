const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./src/schema');
const resolvers = require('./src/resolvers');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')

const app = express();

dotenv.config({path: '.env'})

const startServer = async () => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      const token = req.headers.authorization?.split(' ')[1] || '';
      try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        return { user };
      } catch (err) {
        return {};
      }
    },
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(3000, () => {
    console.log('GraphQL server running at http://localhost:3000/graphql');
  });
};

startServer();
