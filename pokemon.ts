export class Pokemon {
  name: string;
  hitPoints: number;

  walk() {
    console.log(`${this.name} is walking`);
  }
}
