import { MongooseModule } from '@nestjs/mongoose';
import { Module} from '@nestjs/common';
import { ItemSchema } from './items.schema';
import { ItemsResolver } from './items.resolver';
import { ItemsService } from './items.service';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Item',
      schema: ItemSchema
    }]),
  ],
  providers: [
    ItemsService, ItemsResolver
  ]
})

export class ItemsModule {

}