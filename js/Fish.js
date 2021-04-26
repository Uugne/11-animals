const AllAnimals = require('../AllAnimals.js');

class Fish extends AllAnimals {
    constructor(name, color, sound) {
        super(name, color, sound);
        this.canSwim = true;

    }

    swimAway() {
        if (this.canSwim === true) {
            console.log(`I am ${this.name} and I can swim!`);
    }
}

    makeWish() {
        if (this.grantsWishes === true) {
            console.log(`make a wish! (${this.name})`);
        }
    }
}


module.exports = Fish;