const jwt = require("jsonwebtoken");
const { AuthenticationError } = require('apollo-server-errors');
require('dotenv').config();

// Get the secret from environment variables
const secret = process.env.JWT_SECRET;
const expiration = "2h";

module.exports = {
  // Function responsible for applying the authentication middleware
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch (error) {
      throw new AuthenticationError('Invalid token or the token has expired.');
    }

    return req;
  },

  // Function responsible for signing the JWT token
  signToken: function ({ firstName, email, _id, role }) {
    const payload = { firstName, email, _id, role };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};