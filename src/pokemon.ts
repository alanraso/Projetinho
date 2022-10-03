export class Pokemon {
  name: string;
  hitpoints: number;
  level: number;

  move() {
    console.log(`${this.name} moved!`);
  }
}
