import Axios from 'axios';
import { Pokemon } from './pokemon.model';

export async function fetchPokemonsOnServer(): Promise<Pokemon[]> {
  const response = await Axios.get('http://localhost:3000/pokemons');
  return response.data;
}
