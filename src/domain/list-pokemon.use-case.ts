import { Pokemon } from './pokemon';
import { PokemonDatasource } from '../data/pokemon.datasource';

export class ListPokemonUseCase {
  private pokemonDataSource = new PokemonDatasource();

  execute(): Promise<Pokemon[]> {
    // TODO: Add business logic here
    return this.pokemonDataSource.list();
  }
}
