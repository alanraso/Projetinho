import { Pokemon } from './pokemon';

const pokemon = new Pokemon();
pokemon.name = 'Pikachu';
pokemon.hitpoints = 30;

console.log(pokemon);
pokemon.attack();
