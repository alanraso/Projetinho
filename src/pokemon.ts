export class Pokemon {
  name: string;
  hitpoints: number;

  attack() {
    console.log(`${this.name} attacked!`);
  }

  move() {
    console.log(`${this.name} moved!`);
  }

  scream() {
    console.log(`${this.name} screamed!`);
  }
}
