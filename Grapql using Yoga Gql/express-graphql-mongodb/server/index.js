require("dotenv").config();
import { GraphQLServer, PubSub } from "graphql-yoga";
import mongoose from "mongoose";
import { models } from '../database/config'
const { mongoURI: db} = process.env;

import {RootResolver, RootTypeDef} from "../graphql/index";
const pubsub = new PubSub();

const context = {
  models, 
  pubsub
}
const schema = ({
  typeDefs: RootTypeDef,
  resolvers: RootResolver,
  context
});

const server = new GraphQLServer(schema)

mongoose.connect(db, {useCreateIndex: true, useNewUrlParser: true})
.then(() => console.log('connected'))
.catch(err => console.log(err))
server.start(({ port }) => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
