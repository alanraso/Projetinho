export class Pokemon {
  id: string;
  name: string;
  types: string[];

  walk() {
    console.log(this.name + ' walked!');
  }

  attack() {
    console.log(`${this.name} attacked!`);
  }
}
