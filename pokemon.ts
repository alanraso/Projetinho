export class Pokemon {
  name: string;
  hitPoints: number;
  
  move() {
    console.info(`${this.name} moved!`);
  }

  attack() {
    console.info(`${this.name} attacked!`);
  }
}
