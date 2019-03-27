export class Pokemon {
  id: string;
  name: string;
  types: string[];

  // Branch feature/walk
  walk() {
    console.log(name + ' walked!');
  }

  // Branch feature/attack - conflict
  attack() {
    console.log(`${name} attacked!`);
  }
}
