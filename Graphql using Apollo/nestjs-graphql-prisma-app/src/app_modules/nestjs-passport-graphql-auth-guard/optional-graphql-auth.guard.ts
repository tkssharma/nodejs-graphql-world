import { GraphqlAuthGuard } from './graphql-auth.guard';

/**
 * Used to trigger perform logic auth passport.authinticate() middleware,
 * to assign req.user if it exists.
 * This guard always return true.
 */
export class OptionalGraphqlAuthGuard extends GraphqlAuthGuard {
    handleRequest(err, user, info, context, status) {
        try {
            user = super.handleRequest(err, user, info, context, status);
        } catch {
            user = undefined;
        }
        return user;
    }
}
