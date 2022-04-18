import { Resolver } from "@nestjs/graphql";
import { Args, Mutation, Query } from "@nestjs/graphql";
import { ItemType } from "./dto/create-item.dto";
import { ItemInput } from "./input-items.input";
import { ItemsService } from "./items.service";


@Resolver(of => ItemType)
export class ItemsResolver {
  constructor(
    private readonly itemsService: ItemsService
  ) { }
  @Query(returns => [ItemType])
  async items(): Promise<ItemType[]> {
    return this.itemsService.findAll();
  }

  @Query(returns => String)
  async hello(): Promise<string> {
    return 'Say Hello'
  }

  @Mutation(returns => ItemType)
  async createItem(@Args('input') input: ItemInput): Promise<ItemType> {
    return this.itemsService.create(input);
  }

  @Mutation(returns => ItemType)
  async updateItem(@Args('id') id: string, @Args('input') input: ItemInput): Promise<ItemType> {
    return this.itemsService.update(id, input);
  }

  @Mutation(returns => ItemType)
  async deleteItem(@Args('id') id: string): Promise<ItemType> {
    return this.itemsService.delete(id);
  }

}