import { Pokemon } from './pokemon';

const pokemon = new Pokemon();

pokemon.name = 'Pikachu';
pokemon.hitPoints = 200;

console.log(pokemon);
pokemon.attack();
