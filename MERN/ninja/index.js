class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName = () => console.log(`${this.name}\n`);

    showStats = () =>
        console.log(
            `${this.name}'s Stats:\n  Strength: ${this.strength}\n  Speed: ${this.speed}\n  Health: ${this.health}\n`
        );

    drinkSake = () => {
        this.health += 10;
        console.log(
            `${this.name}'s health has been increased by 10 | It is now ${this.health}\n`
        );
    };
}

const ninja1 = new Ninja("Hyabusa", 10);

ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
