import { ListPokemonUseCase } from '../domain/list-pokemon.use-case';

export class PokemonView {
  private listPokemonUseCase = new ListPokemonUseCase();

  // App entry point
  async start() {
    const pokemonList = await this.listPokemonUseCase.execute();
    pokemonList.forEach(pokemon => console.log(`Pokemon name: ${pokemon.name}`));
  }
}
