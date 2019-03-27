export class Pokemon {
  id: string;
  name: string;
  types: string[];

  // Branch feature/walk
  walk() {
    console.log(this.name + ' walked!');
  }

  // Branch feature/attack - conflict
  attack() {
    console.log(`${this.name} attacked!`);
  }
}
