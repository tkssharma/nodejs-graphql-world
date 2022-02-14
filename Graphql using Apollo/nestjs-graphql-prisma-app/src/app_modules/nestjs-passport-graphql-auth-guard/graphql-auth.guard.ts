import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { JsonWebTokenError } from 'jsonwebtoken';

/**
 * Support AuthGuard
 * https://github.com/nestjs/graphql/issues/48
 */
@Injectable()
export class GraphqlAuthGuard extends AuthGuard('jwt') {
    getRequest(context: ExecutionContext) {
        const graphqlContext = GqlExecutionContext.create(context);
        return graphqlContext.getContext().req;
    }

    // async canActivate(context: ExecutionContext) {
    //     const graphqlContext = GqlExecutionContext.create(context);
    //     const { req } = graphqlContext.getContext();
    //     return super.canActivate(new ExecutionContextHost([req])) as Promise<boolean>;
    // }

    handleRequest(err, user, info, context, status) {
        if (err) {
            throw err;
        }
        if (info && info instanceof Error) {
            if (info instanceof JsonWebTokenError) {
                info = String(info);
            }
            throw new UnauthorizedException(info);
        }

        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
