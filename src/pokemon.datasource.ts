import ApolloClient, { gql } from 'apollo-boost';
import { Pokemon } from './pokemon';

const client = new ApolloClient({ uri: 'https://graphql-pokemon.now.sh' });

export class PokemonDatasource {
  async list(): Promise<Pokemon[]> {

    try {
      const result = await client.query<Pokemon[]>({ query: gql`
        query Pokemon {
          pokemons(first: 10) {
            id
            name
            types
          }
        }
      `});

      return result.data;
    } catch (error) {
      console.error('AAAAAA');
      console.error(error);
    }
  }
}
