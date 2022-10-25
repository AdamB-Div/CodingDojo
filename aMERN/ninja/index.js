class Ninja {
    constructor(name, health = 10, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(`My name is ${this.name}\n`);
    }

    showStats() {
        console.log(
            `My stats are:\n Name: ${this.name}\n Health: ${this.health}\n Speed : ${this.speed}\n Strength: ${this.strength}\n`
        );
    }

    drinkSake() {
        this.health += 10;
        console.log(`Drinking Sake brings my health to ${this.health}\n`);
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
