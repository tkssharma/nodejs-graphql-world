import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'
import * as Joi from 'joi';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ProjectModule } from './project/project.module';
import { CategoryModule } from './category/category.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'local')
          .default('development'),
        PORT: Joi.number().default(3000),
        DATABASE_URL: Joi.string().required()
      })
    }),
    // same as Part-1
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          name: 'default',
          type: 'postgres',
          logging: true,
          url: configService.get('DATABASE_URL'),
          entities: [__dirname + '/**/**.entity{.ts,.js}'],
          synchronize: true
        } as TypeOrmModuleAsyncOptions;
      }
    }),
    GraphQLModule.forRoot({
      definitions: {
        path: join(process.cwd(), 'src/graphql.schama.ts'),
        outputAs: 'class'
      }
    }),
    ProjectModule,
    EmployeeModule,
    CategoryModule,
  ]
})

export class DomainModule {

}
