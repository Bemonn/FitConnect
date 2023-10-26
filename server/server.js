// Import necessary libraries
require('dotenv').config();
const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');

// Import your specific components
const { typeDefs } = require('./schemas/typeDefs');
const { resolvers } = require('./schemas/resolvers');
const { authMiddleware } = require('./utils/auth');

// Create an instance of ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => authMiddleware({ req }),
});

// Async function to start the server
const startServer = async () => {
  const app = express();

  // Start the Apollo server
  await server.start();

  // Apply Apollo GraphQL middleware and set the path to /graphql
  server.applyMiddleware({ app });

  // Configure Express to parse URL-encoded bodies and JSON data
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // Serve up static assets in production
  if (process.env.NODE_ENV === 'production') {
  // Point static path to "dist"
  app.use(express.static(path.resolve(__dirname, '../client/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
  });
}

  // Your MongoDB connection URI comes from an environment variable for security
  const MONGODB_URI = process.env.MONGODB_URI;

  try {
    // Connect to the MongoDB database
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB Atlas!');

    // Determine the port for Express to listen on
    const PORT = process.env.PORT || 4000;

    // Start the server
    app.listen(PORT, () => {
      console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
    });
  } catch (err) {
    console.error('Failed to connect to MongoDB Atlas:', err);
  }
};

// Execute the function to start the server
startServer();