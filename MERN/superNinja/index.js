class Ninja {
    constructor(name, health = 0, speed = 3, strength = 3) {
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

class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom = 10) {
        super(name, 200, 10, 10);
        this.wisdom = wisdom;
    }

    speakWisdom = () => {
        super.drinkSake();
        console.log(
            `What one programmer can do in one month, two programmers can do in two months.\n`
        );
    };
}

const ninja1 = new Ninja("Hyabusa");
const superSensei = new Sensei("Master Splinter");

ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
superSensei.speakWisdom();
superSensei.showStats();
