import { gql } from 'apollo-server-express';

export default gql`
  type Message {
        text: String!
        userId: String!
   }
  extend type Query {
    messages: [Messages!]
    message(id: ID!): Message
  }
  extend type Mutation {
    signIn(login: String!, password: String!): Token!
    updateUser(username: String!): User!
    deleteUser(id: ID!): Boolean!
  }
  `