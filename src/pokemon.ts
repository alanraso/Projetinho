export class Pokemon {
    constructor(name: string, hitpoints: 30) {
        this.name = name;
        this.hitpoints = hitpoints;
    }

    hitpoints: number;
    name: string;

    attack() {
        console.log(`${this.name} attacked!`);
    }
}
