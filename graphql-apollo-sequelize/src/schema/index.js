const {gql} = require('apollo-server-express');

const User = require('./user');
const Post = require('./post');
const Tag = require('./tag');
const baseSchema =  gql`
scalar Date

type Query {
  _: Boolean
}

type Mutation {
  _: Boolean
}

type Subscription {
  _: Boolean
}
`;
module.exports =  [baseSchema, User, Post, Tag]