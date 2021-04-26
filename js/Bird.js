const AllAnimals = require('../AllAnimals.js');

class Bird extends AllAnimals{
    constructor(name, color, sound) {
        super (name, color, sound);
        this.wingsCount = true;
        this.canFly = true;

    }

    flyAway() {
        if (this.wingsCount === true || this.canFly === true) {
            console.log(`I am ${this.name} and I can fly!`);
        }
    }
}

module.exports = Bird;