import {GraphQLDateTime} from 'graphql-iso-date'

const customScalarResolver = {
    Date: GraphQLDateTime,
  };

import userResolver from './user';

export default [customScalarResolver, userResolver]