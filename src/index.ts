import { Pokemon } from './pokemon';

const pokemon = new Pokemon();
pokemon.name = 'Pikachu';
pokemon.hitpoints = 40;
pokemon.types = ['Electric'];

pokemon.attack();
pokemon.move();

console.log(pokemon.getTypes());
