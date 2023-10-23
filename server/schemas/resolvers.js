const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

exports.resolvers = {
  Query: {
    me: async (_, __, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addAppointment: async (parent, args, context) => {
      if (context.user) {
        return await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $push: { appointments: args },
          },
          { runValidators: true, new: true }
        );
      }
      throw AuthenticationError;
    },
  },
};