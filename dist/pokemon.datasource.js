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
require("cross-fetch/polyfill");
const apollo_boost_1 = require("apollo-boost");
const graphql_tag_1 = require("graphql-tag");
class PokemonDatasource {
    constructor() {
        this.client = new apollo_boost_1.default({
            uri: 'https://graphql-pokemon.now.sh/graphiql',
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const listQuery = graphql_tag_1.default `
    {
      pokemons(first: 10) {
        id
        name
        types
      }
    }`;
            try {
                const result = yield this.client.query({ query: listQuery });
                return result.data.pokemons;
            }
            catch (error) {
                console.error(error);
                return null;
            }
        });
    }
}
exports.PokemonDatasource = PokemonDatasource;
