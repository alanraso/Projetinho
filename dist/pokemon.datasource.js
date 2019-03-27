"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_boost_1 = require("apollo-boost");
const client = new apollo_boost_1.default({ uri: 'https://graphql-pokemon.now.sh' });
class PokemonDatasource {
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield client.query({ query: apollo_boost_1.gql `
        query Pokemon {
          pokemons(first: 10) {
            id
            name
            types
          }
        }
      ` });
                return result.data;
            }
            catch (error) {
                console.error('AAAAAA');
                console.error(error);
            }
        });
    }
}
exports.PokemonDatasource = PokemonDatasource;
