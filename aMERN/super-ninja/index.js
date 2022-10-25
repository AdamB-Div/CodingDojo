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

class Sensei extends Ninja {
    constructor(name, wisdom = 10) {
        super(name, 200, 10, 10, wisdom);
        this.name = name;
        this.wisdom = wisdom;
    }

    speakWisdom() {
        this.drinkSake();
        console.log(
            `What one programmer can do in one month, two programmers can do in two months.`
        );
    }
}

const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();

const sensei1 = new Sensei("Suzuki");
sensei1.sayName();
sensei1.showStats();
sensei1.speakWisdom();
