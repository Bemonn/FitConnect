require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');

// Importing the modularized schema and resolvers
const { typeDefs } = require('./graphql/typeDefs');
const { resolvers } = require('./graphql/resolvers');

// Create an instance of ApolloServer
const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
});

// Function to start the server
const startServer = async () => {
  const app = express();

  await server.start();

  server.applyMiddleware({ app });

  // Bodyparser middleware setup
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // MongoDB Atlas URI
  const MONGODB_URI = process.env.MONGODB_URI

  try {
    // Connect to MongoDB and then start the Express server
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB Atlas!');

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
    });
  } catch (err) {
    console.error('Failed to connect to MongoDB Atlas:', err);
  }
};

// Execute the function to start the server
startServer();