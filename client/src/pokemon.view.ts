import { fetchPokemonsOnServer } from './pokemon.datasource';
import { Pokemon } from './pokemon.model';

export async function start() {
  const pokemonList: Pokemon[] = await fetchPokemonsOnServer();
  renderList(pokemonList);
}

export function renderList(pokemons: Pokemon[]) {
  console.info('(H1) Pokemons:');
  pokemons.forEach(pokemon => renderPokemonCell(pokemon.name, pokemon.types));
}

function renderPokemonCell(name: string, types: string[]) {
  console.info('------------------------------------------');
  console.info('(DT DD) Nome: ', name);
  console.info('(DT DD) Tipos: ', types.join(', '));
  console.info('------------------------------------------');
}
