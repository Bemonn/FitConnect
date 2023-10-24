const jwt = require("jsonwebtoken");
const { AuthenticationError } = require('apollo-server-errors');

const secret = "mysecretssshhhhhhh";
const expiration = "2h";

module.exports = {
  // We don't define AuthenticationError here anymore, as it's imported directly from apollo-server-errors

  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // Split the token string into parts and extract the actual token
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req; // if there is no token, return the request object as is
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

  signToken: function ({ firstName, email, _id }) {
    const payload = { firstName, email, _id };

    // sign the token and return it
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};