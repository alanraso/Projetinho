import { Pokemon } from './pokemon';

const pokemon = new Pokemon();
pokemon.name = 'Pikachu';

console.log(pokemon.name + ' was created!');

pokemon.attack();
pokemon.move();
