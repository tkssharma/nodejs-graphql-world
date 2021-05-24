require('dotenv/config');
const cors = require('cors');
const http = require('http');
const jwt = require('jsonwebtoken');
const express = require('express');
const {
  ApolloServer,
  AuthenticationError
} = require('apollo-server-express');
const DB = require('./models/index.js');

const schema = require('./src/schema');
const resolvers = require('./src/resolvers');

const app = express();

app.use(cors());
DB.sequelize.sync({
  force: false
});

const server = new ApolloServer({
  introspection: true,
  typeDefs: schema,
  resolvers,
  context: async ({req}) => {
    const authUser = await getUser(req);
    console.log(authUser);
    return {
      authUser
    }
  }
});

const getUser = async (req) => {
   const token = req.headers['x-token'];
   if(token){
     try {
       return await jwt.verify(token, process.env.JWT_SECRET) 
     }catch(e){
        throw new AuthenticationError('Your session expired')
     }
   }
}




server.applyMiddleware({ app, path: '/graphql' });
const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

const port = process.env.PORT || 3000;

httpServer.listen({ port }, () => {
    console.log(`Apollo Server on http://localhost:${port}/graphql`);
});