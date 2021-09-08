export class Pokemon {
  name: string;
  hitpoints: number;

  attack(move: string) {
    console.log(`${this.name} used ${move}!`);
  }
}
