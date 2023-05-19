import { Pokemon, PokemonType } from './pokemon';

const pokemon = new Pokemon();
pokemon.name = 'Pikachu';
pokemon.hitpoints = 40;
pokemon.types = [PokemonType.Electric];

pokemon.attack();
pokemon.move();

console.log(pokemon.getTypes());
