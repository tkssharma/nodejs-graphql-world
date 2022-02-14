import {mergeResolvers, mergeTypeDefs} from '@graphql-tools/merge';

import User from './types/user';
import Post from './types/post'
import Comment from './types/comment'

import UserResolver from './resolvers/user';
import PostResolver from './resolvers/post'
import CommentResolver from './resolvers/comment'

const RootTypeDef = mergeTypeDefs([User, Post, Comment], {all: true})
const RootResolver = mergeResolvers([UserResolver, PostResolver, CommentResolver]);

export { RootTypeDef, RootResolver};

