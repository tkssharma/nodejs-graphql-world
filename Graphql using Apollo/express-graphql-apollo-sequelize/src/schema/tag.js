const { gql } = require('apollo-server-express');

module.exports =  gql`
  type Tag {
    id: Int!
    name: String!
    slug: String!
    description: String
    posts: [Post]
    createdAt: DateTime! # will be generated
    updatedAt: DateTime! # will be generated
  }
  
  extend type Query {
    allTags: [Tag]
    fetchTag(id: Int!): Tag
  }
  extend type Mutation {
    addTag (
        name: String!,
        description: String
    ): Tag
    updateTag (
        id: Int!,
        name: String!,
        description: String
    ): Tag
    deleteTag (
        id: Int!
    ): Boolean
  }`