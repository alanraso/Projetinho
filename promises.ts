import { Pokemon } from './pokemon';

function wait(seconds: number): Promise<void> {
  return new Promise(resolve => setTimeout(() => resolve(), seconds * 1000));
}

const pokemons: Pokemon[] = [
  {
    id: 16,
    name: 'Pidgey',
    hitPoints: 12,
    level: 2,
  },
  {
    id: 19,
    name: 'Ratata',
    hitPoints: 13,
    level: 3,
  },
  {
    id: 56,
    name: 'Mankey',
    hitPoints: 21,
    level: 4,
  },
];

export async function observePokemons(): Promise<Pokemon[]> {
  await wait(4);
  return pokemons;
}

export async function capturePokemon(id: number): Promise<Pokemon> {
  await wait(2);
  console.log('Pokeball shaking...');
  await wait(2);
  console.log('Pokeball shaking...');
  await wait(1);
  const pokemon = pokemons.find(pokemon => pokemon.id === id);
  if (Math.random() > 0.5) {
    return pokemon;
  } else {
    throw new Error(`Oh no! You couldn't catch ${pokemon.name}!`);
  }
}

const pokedexMessagesMap: { [key: number]: string } = {
  16: 'A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.',
  19: 'Bites anything when it attacks. Small and very quick, it is a common sight in many places.',
  56: 'Extremely quick to anger. It could be docile one moment then thrashing away the next instant.',
};

export async function fetchPokedexInfo(id: number): Promise<string> {
  await wait(2);
  const pokemon = pokemons.find(pokemon => pokemon.id === id);

  if (!pokemon) {
    throw new Error('Pokemon was not found on Pokedex!');
  } else {
    return pokedexMessagesMap[id];
  }
}
