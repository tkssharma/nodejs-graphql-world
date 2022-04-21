import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ItemInput } from './input-items.input';
import { ItemType } from './dto/create-item.dto';
import { Item } from './interfaces/item.interface';
@Injectable()
export class ItemsService {
  constructor(
    @InjectModel('Item') private itemModule: Model<Item>
  ) { }

  async create(createItemDto: ItemInput): Promise<ItemType> {
    const createdItem = new this.itemModule(createItemDto);
    return await createdItem.save() as any;
  }
  async findAll(): Promise<ItemType[]> {
    return await this.itemModule.find().exec();
  }
  async findOne(id: string): Promise<ItemType> {
    return await this.itemModule.findOne({ _id: id });
  }
  async delete(id: string): Promise<ItemType> {
    return await this.itemModule.findByIdAndRemove(id);
  }

  async update(id: string, item: ItemInput): Promise<ItemType> {
    return await this.itemModule.findByIdAndUpdate(id, item, { new: true });
  }
}