import { Pokemon } from './pokemon';
import { PokemonDatasource } from './pokemon.datasource';

const datasource = new PokemonDatasource();
const pokemon = new Pokemon();

async function testList() {
  const pokemons = await datasource.list();

  console.log(pokemons.map(p => p.name));
}

testList();
