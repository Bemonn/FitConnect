const { gql } = require("apollo-server-express");
//requestPasswordReset(email: String!): Boolean
//resetPassword(token: String!, newPassword: String!): Boolean

exports.typeDefs = gql`
  type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    role: String!
    appointments: [Appointment]
  }

  type Appointment {
    _id: ID
    selectedDate: String!
    selectedTime: String!
    selectedTrainer: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      role: String!
      password: String!
    ): Auth

    login(email: String!, password: String!): Auth

    updateUser(
      firstName: String
      lastName: String
      email: String
    ): User

    addAppointment(
      selectedDate: String!
      selectedTime: String!
      selectedTrainer: String!
    ): User

    deleteUser(_id: ID!): User

    deleteAppointment(selectedDate: String!, selectedTime: String!): Appointment
  }
`;