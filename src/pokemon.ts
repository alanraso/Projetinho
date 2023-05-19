export enum PokemonType {
  Fire = 'Fire',
  Electric = 'Eletric',
  Stone = 'Stone',
}

export class Pokemon {
  name: string;
  hitpoints: number;
  types: PokemonType[];
  moves: string[];

  getTypes(): PokemonType[] {
    return this.types;
  }

  getMoves(): string[] {
    return this.moves;
  }

  attack() {
    console.log(`${this.name} attacked!`);
  }

  move() {
    console.log(`${this.name} moved!`);
  }
}
