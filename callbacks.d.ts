import { Pokemon } from './pokemon';

declare module callbacks {
  function observePokemons(onEnd: (pokemons: Pokemon[]) => void) : void;

  function capturePokemon(
    id: number,
    onSuccess: (pokemon: Pokemon) => void,
    onError: (error: Error) => void,
  );

  function fetchPokedexInfo(
    id: number,
    onSuccess: (details: string) => void,
    onError: (error: Error) => void,
  );
}

export = callbacks;
