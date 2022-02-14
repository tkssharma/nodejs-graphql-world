import { GraphQLServer } from 'graphql-yoga';
import User from './resolvers/User'
import Post from './resolvers/Post'
import Comment from './resolvers/Comment'
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import DB from './db';

const server = new GraphQLServer({ 
  typeDefs: './src/schema.graphql',
  resolvers: {
    Mutation,
    Query,
    User,
    Post,
    Comment
  },
  context: {
    DB,
    user: {},
    session: {}
  }
 });
server.start(() => console.log('Server is running on localhost:4000'));
