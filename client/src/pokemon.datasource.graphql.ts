import 'cross-fetch/polyfill'; // Used by ApolloClient
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { Pokemon } from './pokemon.model';

export class PokemonDatasource {
  private client: ApolloClient<{}>;

  constructor() {
    this.client = new ApolloClient({
      uri: 'https://graphql-pokemon.now.sh/graphiql',
    });
  }

  async list(): Promise<Pokemon[]> {
    const listQuery = gql`
    {
      pokemons(first: 10) {
        id
        name
        types
      }
    }`;

    try {
      const result = await this.client.query({query: listQuery});
      return result.data.pokemons;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}
