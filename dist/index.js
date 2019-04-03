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
const pokemon_1 = require("./pokemon");
const pokemon_datasource_1 = require("./pokemon.datasource");
const datasource = new pokemon_datasource_1.PokemonDatasource();
const pokemon = new pokemon_1.Pokemon();
pokemon.name = 'Bulbassaur';
function testList() {
    return __awaiter(this, void 0, void 0, function* () {
        const pokemons = yield datasource.list();
        console.log(pokemons.map(p => p.name));
    });
}
testList();
