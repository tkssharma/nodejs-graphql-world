import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AccountModule } from './api/account/account.module';
import { ConfigModule, ConfigService } from 'nestjs-config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleModule } from './api/article/article.module';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}'), {
      path: path.resolve(__dirname, '..', '.env'),
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (config: ConfigService) => config.get('typeorm'),
      inject: [ConfigService],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    AccountModule,
    ArticleModule,
  ],
})
export class AppModule {}
