const { User } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError, ForbiddenError } = require('apollo-server-express');

exports.resolvers = {
  Query: {
    me: async (_, __, context) => {
      if (context.user) {
        // If the user is logged in, find them by their '_id' and return their data
        return await User.findOne({ _id: context.user._id });
      }
      // If no user is logged in, throw an authentication error
      throw new AuthenticationError('You need to be logged in!');
    },
    users: async (_, __, context) => {
      // Only allow admins to query all users
      if (context.user && context.user.role === 'admin') {
        return await User.find({});
      }
      // If the user is not an admin, throw a forbidden error
      throw new ForbiddenError('You are not authorized for this action!');
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      // Create a new user with the provided information
      const user = await User.create(args);
      // Sign a token for the new user
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      // Try to find the user by their email
      const user = await User.findOne({ email });

      if (!user) {
        // If no user is found, throw an authentication error
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        // If the password is incorrect, throw an authentication error
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      // If everything is correct, return the token and user
      return { token, user };
    },
    addAppointment: async (parent, args, context) => {
      if (context.user) {
        // If the user is logged in, allow them to add an appointment
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { appointments: args } },
          { new: true, runValidators: true }
        );
        return updatedUser;
      }
      // If no user is logged in, throw an authentication error
      throw new AuthenticationError('You need to be logged in!');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        // If the user is logged in, find them by '_id' and update their data
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { ...args },
          { new: true, runValidators: true }
        );
        return updatedUser;
      }
      // If no user is logged in, throw an authentication error
      throw new AuthenticationError('You need to be logged in!');
    },
    deleteUser: async (parent, { _id }, context) => {
      // Check if the user is logged in and is an admin before deleting a user
      if (context.user && context.user.role === 'admin') {
        // If the user is an admin, allow them to delete the user by '_id'
        return await User.findByIdAndDelete(_id);
      }
      // If the user is not an admin, throw a forbidden error
      throw new ForbiddenError('You are not authorized for this action!');
    },
    deleteAppointment: async (parent, { _id }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }
    
      // Find the user who owns the appointment
      const user = await User.findOne({ 'appointments._id': _id }, 'appointments.$');
    
      if (!user) {
        throw new Error('No appointment found with this id!');
      }
    
      // Check if the context user is the owner of the appointment or has a higher role
      const ownsAppointment = user._id.equals(context.user._id);
      const hasHigherRole = ['admin', 'trainer'].includes(context.user.role);
    
      if (!ownsAppointment && !hasHigherRole) {
        throw new ForbiddenError('You need to have appropriate permissions to delete an appointment!');
      }
    
      // Pull the appointment from the user's 'appointments' array
      const appointmentToDelete = user.appointments[0];
      await user.updateOne({ $pull: { appointments: { _id } } });
    
      // Return the appointment that was deleted
      return appointmentToDelete;
    },
  },
};