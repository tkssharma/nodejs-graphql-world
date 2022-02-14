
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class Deleted {
    delete: boolean;
}

export class League {
    id: string;
    name: string;
    pokemons?: Pokemon[];
}

export abstract class IMutation {
    abstract createLeague(name: string): League | Promise<League>;

    abstract updateLeague(id?: string, name: string): League | Promise<League>;

    abstract deleteLeague(id?: string): Deleted | Promise<Deleted>;

    abstract create(name: string, type: string, pokedex: string): Pokemon | Promise<Pokemon>;

    abstract update(id: string, name: string, type: string, pokedex: string): Pokemon | Promise<Pokemon>;

    abstract delete(id: string): Deleted | Promise<Deleted>;
}

export class Pokemon {
    id: string;
    name: string;
    pokedex: string;
    type: string;
    league: League;
}

export abstract class IQuery {
    abstract leagues(): League[] | Promise<League[]>;

    abstract league(id?: string): League | Promise<League>;

    abstract pokemons(): Pokemon[] | Promise<Pokemon[]>;

    abstract pokemon(id?: string): Pokemon | Promise<Pokemon>;
}
