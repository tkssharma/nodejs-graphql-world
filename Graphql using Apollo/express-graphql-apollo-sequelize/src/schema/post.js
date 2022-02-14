const { gql } = require('apollo-server-express');

module.exports = gql`
  type Post {
    id: Int!
    title: String!
    slug: String!
    content: String!
    status: Boolean!
    user: User!
    tags: [Tag!]!
    createdAt: DateTime! # will be generated
    updatedAt: DateTime! # will be generated
  }
  
  extend type Query {
    allPost: [Post]
    fetchPost(id: Int!): Post
  }
  extend type Mutation {
    addPost (
        title: String!,
        content: String!,
        status: Boolean
        tags: [Int!]!
    ): Post
    updatePost (
        id: Int!,
        title: String!,
        content: String!,
        status: Boolean,
        tags: [Int!]!
    ): Post
    deletePost (
        id: Int!
    ): Boolean
  }
`