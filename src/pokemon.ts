export enum PokemonType {
  Fire = 'Fire',
  Electric = 'Eletric',
  Stone = 'Stone',
}

export class Pokemon {
  name: string;
  hitpoints: number;
  types: PokemonType[];

  getTypes(): PokemonType[] {
    return this.types;
  }

  attack() {
    console.log(`${this.name} attacked!`);
  }

  move() {
    console.log(`${this.name} moved!`);
  }
}
