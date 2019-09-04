import { Pokemon } from './pokemon';
import { observePokemons, capturePokemon, fetchPokedexInfo } from './promises'

async function startGame(): Promise<void> {
  const pokemons: Pokemon[] = await observePokemons();
  console.log(pokemons);

  try {
    const pokemon = await capturePokemon(56);
    console.info(`Parabéns, você capturou o ${pokemon.name}`);

    const details = await fetchPokedexInfo(56);
    console.info(details);
  } catch (error) {
    console.error(error);
  }
}

startGame();
