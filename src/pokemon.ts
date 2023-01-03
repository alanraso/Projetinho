export class Pokemon {
  name: string;
  hitpoints: number;

  attack() {
    console.log(`Pokemon ${this.name} has attacked!!`);
    console.log(`HP: ${this.hitpoints}`);
  }
}
