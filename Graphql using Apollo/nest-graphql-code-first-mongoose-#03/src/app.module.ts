import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    ItemsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/example')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
