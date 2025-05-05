export class Pokemon {
  name: string;
  hitpoints: number;

  move() {
    console.log(`${this.name} moved!`);
  }
}
