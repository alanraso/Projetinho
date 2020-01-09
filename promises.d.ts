import { Pokemon } from './pokemon';

declare module promises {
  function observePokemons(): Promise<Pokemon[]>;

  function capturePokemon(id: number): Promise<Pokemon>;

  function fetchPokedexInfo(id: number): Promise<string>;
}

export = promises;
