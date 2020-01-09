import { observePokemons, capturePokemon, fetchPokedexInfo } from './promises';
import { Pokemon } from './pokemon';

async function startGame() {
  try {
    const pokemons: Pokemon[] = await observePokemons();
    const pokemon: Pokemon = await capturePokemon(pokemons[0].id);
    console.info(`Você capturou ${pokemon.name}`);
    const details: string = await fetchPokedexInfo(pokemon.id);
    console.info(details);
  } catch (error) {
    console.error(error);
  }
}

startGame();
