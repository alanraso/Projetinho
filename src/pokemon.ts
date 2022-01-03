export class Pokemon {
  name: string;
  hitPoints: number;
  damage: number;
  
  attack() {
    console.log(`${this.name} has attacked!`);
  }
}
