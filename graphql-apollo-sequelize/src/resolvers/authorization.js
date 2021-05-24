import {skip, combineResolvers} from 'graphql-resolvers';
import { ForbiddenError } from 'apollo-server';


export const isAuthenticated = (parent, args, {me}) => {
  if(me){
      return skip;
  }
  return new ForbiddenError('user is not authenticated');
}

export const isAdmin = combineResolvers(
    isAuthenticated,
    (parent, args , { me : {role}}) => {
        return role === 'admin' ? skip : new ForbiddenError('user is not authz for this operation');
    }
);