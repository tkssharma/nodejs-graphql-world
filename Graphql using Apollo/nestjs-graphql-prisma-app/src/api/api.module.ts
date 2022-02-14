import { Module } from '@nestjs/common';
import { GraphQLClient } from 'graphql-request';

import { AppEnvironment } from '../app.environment';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';

@Module({
    imports: [],
    controllers: [ApiController],
    providers: [
        ApiService,
        {
            provide: 'GraphQLClient',
            inject: [AppEnvironment],
            useFactory: (appEnvironment: AppEnvironment) => {
                const url = appEnvironment.graphqlEndpoint;
                return new GraphQLClient(url);
            },
        },
    ],
})
export class ApiModule {}
