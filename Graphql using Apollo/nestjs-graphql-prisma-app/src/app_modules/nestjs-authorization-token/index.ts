import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IncomingMessage } from 'http';

// tslint:disable-next-line:variable-name
export const AuthorizationToken = createParamDecorator(
    (data: unknown, context: ExecutionContext) => {
        const request = context.switchToHttp().getRequest();
        const authorization = request.headers.authorization;
        const [, token] = String(authorization).split(' ');
        return token;
    },
);
