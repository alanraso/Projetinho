"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pokemon {
    walk() {
        console.log(this.name + ' walked!');
    }
    attack() {
        console.log(`${this.name} attacked!`);
    }
}
exports.Pokemon = Pokemon;
