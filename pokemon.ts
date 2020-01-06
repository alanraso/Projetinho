export class Pokemon {
  name: string;
  hitPoints: number;

  attack() {
    console.log(`${this.name} attacked!`);
  }
}
