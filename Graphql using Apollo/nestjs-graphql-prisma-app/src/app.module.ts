import { Global, Logger, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { EnvironmentModule } from '@nestjs-steroids/environment';
import {
    ApolloErrorConverter,
    extendMapItem,
    mapItemBases,
} from 'apollo-error-converter';
import { PubSub } from 'apollo-server-express';
import { PrismaModule } from 'app_modules/prisma';
import { Request } from 'express';
import { NestologModule } from 'nestolog';

import { ApiModule } from './api/api.module';
import { AppEnvironment } from './app.environment';
import { ArticleModule } from './article/article.module';
import { CommentModule } from './comment/comment.module';
import { TagModule } from './tag/tag.module';
import { UserModule } from './user/user.module';

export async function graphqlModuleFactory(logger: Logger) {
    return {
        tracing: false,
        sortSchema: true,
        autoSchemaFile: '~schema.gql',
        installSubscriptionHandlers: true,
        subscriptions: {
            keepAlive: 5000,
        },
        context: (data: any) => {
            return {
                token: undefined as string | undefined,
                req: data.req as Request,
            };
        },
        formatError: new ApolloErrorConverter({
            logger: logger.error.bind(logger),
            errorMap: [
                {
                    NotFoundError: {
                        name: 'ENTITY_NOT_FOUND',
                        message: 'Entity Not Found',
                        logger: true,
                    },
                    BadRequestException: extendMapItem(mapItemBases.InvalidFields, {
                        logger: true,
                        data: (err: any) => {
                            return err?.response;
                        },
                    }),
                },
            ],
        }),
    };
}

@Global()
@Module({
    imports: [
        ApiModule,
        UserModule,
        ArticleModule,
        CommentModule,
        TagModule,
        PrismaModule.registerAsync({
            inject: [AppEnvironment],
            useFactory: async (appEnvironment: AppEnvironment) => {
                return {
                    logQueries: appEnvironment.isDevelopment(),
                };
            },
        }),
        EnvironmentModule.forRoot({
            isGlobal: true,
            loadEnvFile: true,
            useClass: AppEnvironment,
        }),
        GraphQLModule.forRootAsync({
            inject: [Logger],
            useFactory: graphqlModuleFactory,
        }),
        NestologModule.forRoot(),
    ],
    providers: [
        Logger,
        {
            provide: 'PUB_SUB',
            useValue: new PubSub(),
        },
    ],
    exports: [Logger, 'PUB_SUB'],
})
export class AppModule {}
