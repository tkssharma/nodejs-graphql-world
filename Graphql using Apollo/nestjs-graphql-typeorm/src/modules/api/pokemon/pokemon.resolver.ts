import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { PokemonService } from './pokemon.service';
import { PokemonEntity } from '../../entity/pokemon.entity';

@Resolver(of => PokemonEntity)
export class PokemonResolver {
  constructor(private pokemonService: PokemonService) {
  }

  @Query()
  async pokemons() {
    return await this.pokemonService.getPokemons();
  }

  @Mutation()
  async create(@Args('name') name, @Args('type') type, @Args('pokedex') pokedex) {
    return this.pokemonService.createPokemon({ name, type, pokedex });
  }

  @Mutation()
  async update(@Args('id') id, @Args('name') name, @Args('type') type, @Args('pokedex') pokedex) {
    return this.pokemonService.update(id, { name, type, pokedex });
  }

  @Mutation()
  async delete(@Args('id') id) {
    await this.pokemonService.delete(id);
    return { delete: true };
  }

  @Query()
  async pokemon(@Args('id') id: string) {
    return await this.pokemonService.show(id);
  }
}
