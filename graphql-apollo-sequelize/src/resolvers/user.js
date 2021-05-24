'use strict';
const {
  ApolloError
} = require('apollo-server-express');
const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');
const DB = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const slugify = require('slugify');
require('dotenv').config();

module.exports = {
    Query: {
        async allUsers() {
            return await DB.User.findAll({});
         },
         async fetchUser(_, {id }, {authUser} ) {
            return await DB.User.findById(id);
         },
    },
    Mutation: {
         async login(_ , {email, password}){
             const user = await DB.User.findOne({ where: {email}});
             if(!user){
                 throw new Error('No user Found with this email')
             }
             const valid = await bcrypt.compare(password, user.password);
             if(!valid){
                throw new Error('invalid password provided')
             }
             return jwt.sign({
                 id: user.id,
                 email: user.email 
             }, process.env.JWT_SECRET, {expiresIn: '24h'})
         },
        async createUser(_, {firstName, email, lastName, password}){
          return await DB.User.create({
                firstName,
                lastName,
                email,
                password: await bcrypt.hash(password, 10)
            }
          )
        },

        async updateUser(_, {id, firstName, lastName}, {authUser}){
            if(!authUser){
              throw new Error('You Must Login First')
            }
            try {
            const user = await DB.User.findById(id);
            if(!user){
                throw new Error('No User foudn for update, please check userid')
              }
            await user.update({
                firstName,
                lastName
            });
            return user;
            }catch(err){
              throw new ApolloError('custm message')
            }
          }    
    }
}