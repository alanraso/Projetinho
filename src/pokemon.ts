export class Pokemon {
  name: string;
  hitpoints: number;
  types: string[];

  getTypes(): string[] {
    return this.types;
  }

  attack() {
    console.log(`${this.name} attacked!`);
  }

  move() {
    console.log(`${this.name} moved!`);
  }
}
