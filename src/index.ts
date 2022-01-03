import { Pokemon } from './pokemon';

const pokemon = new Pokemon();

pokemon.name = 'Pikachu';
pokemon.hitPoints = 200;
pokemon.damage = 10;

console.log(pokemon);
pokemon.attack();
