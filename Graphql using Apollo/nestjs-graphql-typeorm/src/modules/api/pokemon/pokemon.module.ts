import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonEntity } from '../../entity/pokemon.entity';
import { PokemonResolver } from './pokemon.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([PokemonEntity])],
  providers: [PokemonService, PokemonResolver],
})
export class PokemonModule {
}
