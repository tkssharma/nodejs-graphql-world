'use strict';

const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');
const DB = require('../../models');
const slugify = require('slugify');
require('dotenv').config();

module.exports = {
    Query: {
        async allTag() {
            return await DB.Tag.findAll({});
         },
         async fetchTag(_, {id }, {authUser} ) {
            return await DB.Tag.findById(id);
         },
    },
    Mutation: {
         async addTag(_ , {username, password}){
    
         },
        async updateTag(_, {id, firstName, lastName}, {authUser}){

        }    
    }
}