export class Pokemon {
  name: string;
  hitpoints: number;

  attack() {
    console.log(`Pokemon ${this.name} attacked!`);
  }
}
