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