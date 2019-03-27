import { Pokemon } from './pokemon';
import { PokemonDatasource } from './pokemon.datasource';

const datasource = new PokemonDatasource();
const pokemon = new Pokemon();

pokemon.name = 'Bulbassaur';

async function testList() {
  const lista = await datasource.list();
  console.log(lista);
}

testList();
