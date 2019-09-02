export class Pokemon {
  name: string;
  hitPoints: number;

  move() {
    console.log(`${this.name} moved!`);
  }
}
