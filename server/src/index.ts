import * as express from 'express';
import { fetchPokemons } from './pokemons';

const port = 3000;
const server = express();

server.get('/pokemons', (req, res) => {
  // Consulta no banco de dados e retorna
  const pokemons = fetchPokemons();
  res.send(pokemons);
});

server.get('/pokemons/:id', (req, res) => {
  const id: number = +req.params.id;
  const pokemons = fetchPokemons();
  res.send(pokemons[id - 1]);
});

server.listen(port, () => {
  console.info(`Servidor escutando em http://localhost:${port}`);
});
