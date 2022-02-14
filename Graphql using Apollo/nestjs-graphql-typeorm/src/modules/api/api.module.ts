import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from '../shared/logging.interceptor';
import { PokemonModule } from './pokemon/pokemon.module';
import { UserModule } from './user/user.module';
import { LeagueModule } from './league/league.module';

@Module({
  imports: [UserModule, PokemonModule, LeagueModule],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
  exports: [UserModule, PokemonModule, LeagueModule],
})

export class ApiModule {
}
