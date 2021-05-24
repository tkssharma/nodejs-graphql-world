'use strict';

const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');
const DB = require('../../models');
const slugify = require('slugify');
require('dotenv').config();

module.exports = {
    Query: {
        async allPost() {
            return await DB.Post.all({});
         },
         async fetchPost(_, {id }, {authUser} ) {
            return await DB.Post.findById(id);
         },
    },
    Mutation: {
              // Add a new post
              async addPost(_, { title, content, status, tags }, { authUser }) {
    
                const user = await DB.User.findOne({ where: { id: authUser.id } });
    
                const post = await DB.Post.create({
                    title,
                    slug: slugify(title, { lower: true }),
                    content,
                    status
                });
                console.log(post);
    
                // Assign tags to post
                await post.setTags(tags);
    
                return post;
            },
    
            // Update a particular post
            async updatePost(_, { id, title, content, status, tags }, { authUser }) {
                // Make sure user is logged in
                if (!authUser) {
                    throw new Error('You must log in to continue!')
                }
    
                // fetch the post by it ID
                const post = await DB.Post.findById(id);
    
                // Update the post
                await post.update({
                    title,
                    slug: slugify(title, { lower: true }),
                    content,
                    status
                });
    
                // Assign tags to post
                await post.setTags(tags);
    
                return post;
            },
    
            // Delete a specified post
            async deletePost(_, { id }, { authUser }) {
                // Make sure user is logged in
                if (!authUser) {
                    throw new Error('You must log in to continue!')
                }
    
                // fetch the post by it ID
                const post = await DB.Post.findById(id);
    
                return await post.destroy();
            }
    }
}