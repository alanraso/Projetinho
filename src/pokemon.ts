export class Pokemon {
  name: string;
  hitpoints: number;

  attack() {
    console.log(`Pokemon ${this.name} attacked!`);
  }

  heal(quantity: number) {
    console.log(`Pokemon recovered ${quantity} HP`);
  }
}
