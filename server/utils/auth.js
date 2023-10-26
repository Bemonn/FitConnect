const jwt = require("jsonwebtoken");
// Importing the error class to handle authentication errors
const { AuthenticationError } = require('apollo-server-errors');

// Secret for signing the JWT token, consider storing it in environment variables for production
const secret = "mysecretssshhhhhhh";
// Token expiration time
const expiration = "2h";

module.exports = {
  // Function responsible for applying the authentication middleware
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<token_value>"] -> if it's coming from the 'authorization' header
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    // if no token, do not attempt to spread the request, just return it
    if (!token) {
      return req;
    }

    try {
      // if token can be verified, add the decoded user's data to the request so it can be accessed in the resolver
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },

  // Function responsible for signing the JWT token
  signToken: function ({ firstName, email, _id, role }) {
    const payload = { firstName, email, _id, role };

    // sign the token and return it
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};