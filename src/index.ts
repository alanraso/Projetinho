import { Pokemon } from "./pokemon";

const pokemon = new Pokemon();
pokemon.name = "Pikachu";
pokemon.hitpoints = 200;

console.log(pokemon);

pokemon.attack();
pokemon.receiveDamge(10);
