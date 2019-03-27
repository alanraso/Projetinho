export class Pokemon {
  name: string;
  hitPoints: number;

  // Branch feature/walk
  walk() {
    console.log(name + ' walked!');
  }

  // Branch feature/attack - conflict
  attack(move: string) {
    console.log(`${name} used ${move}.`);
  }
}
