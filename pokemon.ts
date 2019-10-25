export class Pokemon {
  name: string;
  hitPoints: number;

  move() {
    console.info(`${this.name} moved!`);
  }
}
