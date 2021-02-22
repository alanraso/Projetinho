export class Pokemon {
    constructor(name: string, hitpoints: number) {
        this.name = name;
        this.hitpoints = hitpoints;
    }

    hitpoints: number;
    name: string;

    attack() {
        console.log(`${this.name} attacked!`);
    }

    move() {
        console.log(`${this.name} moved!`);
    }
}
