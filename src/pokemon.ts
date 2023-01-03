export class Pokemon {
  name: string;
  hitpoints: number;

  attack() {
    console.log(`Pokemon ${this.name} has attacked!`);
    console.log(`HP: ${this.hitpoints}`);
  }

  receiveDamge(damage: number) {
    this.hitpoints = this.hitpoints - damage;
    if (this.hitpoints <= 0) {
      console.log(`${this.name} has fainted`);
    }
    console.log(`Current HP: ${this.hitpoints}`);
  }
}
