const { GraphQLServer } = require("graphql-yoga");
const fetch = require("node-fetch");

const typeDefs = `
  type Query {
    getPokemon(id: Int!): Pokemon
  }

  type Pokemon {
    id: Int
    name: String
    height: Int
    abilities: [AbilityObj]
    stats: [StatObj]
  }

  type AbilityObj {
    slot: Int
    is_hidden: Boolean
    ability: Ability
  }

  type Ability {
    name: String
    url: String
  }

  type StatObj {
    effort: Int
    base_stat: Int
    stat: Stat
  }

  type Stat {
    name: String
    url: String
  }
`;

const resolvers = {
  Query: {
    getPokemon: async (_, { id }) => {
      const response = await fetch(`http://pokeapi.co/api/v2/pokemon/${id}`);
      return response.json();
    }
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log("Server is running on localhost:4000"));