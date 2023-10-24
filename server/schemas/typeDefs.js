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
    appointmentDate: String!
    startTime: String!
    endTime: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
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
      appointmentDate: String!
      startTime: String!
      endTime: String!
    ): User
  }
`;