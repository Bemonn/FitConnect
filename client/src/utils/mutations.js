import { gql } from "@apollo/client"

export const ADD_USER = gql`
mutation AddUser($firstName: String!, $lastName: String!, $email: String!, $role: String!, $password: String!) {
  addUser(firstName: $firstName, lastName: $lastName, email: $email, role: $role, password: $password) {
    token
    user {
      role
      firstName
      email
    }
  }
}`

export const LOGIN_USER = gql`
mutation Mutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      role
    }
  }
}`

export const ADD_APPOINTMENT = gql`
mutation AddAppointment($selectedDate: String!, $selectedTime: String!, $selectedTrainer: String!) {
  addAppointment(selectedDate: $selectedDate, selectedTime: $selectedTime, selectedTrainer: $selectedTrainer) {
    _id
    firstName
    lastName
    email
    role
    appointments {
      _id
      selectedDate
      selectedTime
      selectedTrainer
    }
  }
}`

export const UPDATE_USER = gql`
mutation UpdateUser($firstName: String, $lastName: String, $email: String) {
  updateUser(firstName: $firstName, lastName: $lastName, email: $email) {
    _id
    firstName
    lastName
    email
    role
    appointments {
      _id
      selectedDate
      selectedTime
      selectedTrainer
    }
  }
}`

export const DELETE_APPOINTMENT = gql`
  mutation DeleteAppointment($selectedDate: String!, $selectedTime: String!) {
    deleteAppointment(selectedDate: $selectedDate, selectedTime: $selectedTime) {
      _id
      selectedDate
      selectedTime
      selectedTrainer
    }
  }
`;

export const DELETE_USER = gql`
mutation DeleteUser($id: ID!) {
  deleteUser(_id: $id) {
    _id
    firstName
    lastName
    email
    role
    appointments {
      _id
      selectedDate
      selectedTime
      selectedTrainer
    }
  }
}`
