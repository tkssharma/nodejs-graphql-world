import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from './modules/config/config.module';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { ConfigService } from './modules/config/config.service';
import { ApiModule } from './modules/api/api.module';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          name: 'default',
          type: configService.get('DB_TYPE'),
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
          entities: [__dirname + '/**/**.entity{.ts,.js}'],
          synchronize: configService.get('DB_SYNC'),
          cache: {
            type: configService.get('DB_CACHE_DRIVER'),
            options: {
              host: configService.get('DB_CACHE_HOST'),
              port: configService.get('DB_CACHE_PORT'),
            },
          },
        } as TypeOrmModuleAsyncOptions;
      },
    }),
    GraphQLModule.forRoot({
      playground: true,
      typePaths: ['./**/*.graphql'],
      context: ({ req }) => ({ headers: req.headers }),
      debug: true,
      definitions: {
        path: join(process.cwd(), 'src/graphql.schema.ts'),
        outputAs: 'class',
      },
    }),
    ApiModule,
  ],
})
export class AppModule {
}
