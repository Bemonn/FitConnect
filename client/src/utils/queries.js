const { gql } = require("apollo-client");

export const QUERY_ME = gql`
query {
  me {
    _id
    firstName
    lastName
    role
    email
    appointments {
      appointmentDate
      startTime
      endTime
    }
  }
}`

export const QUERY_ALL = gql`
query Users {
  users {
    _id
    firstName
    lastName
    email
    role
    appointments {
      _id
      appointmentDate
      startTime
      endTime
    }
  }
}`