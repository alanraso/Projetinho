export class Pokemon {
  name: string;
  hitpoints: number;

  attack() {
    console.log(this.name + ' attacked!');
  }
}
