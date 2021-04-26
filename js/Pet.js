const AllAnimals = require('../AllAnimals.js');

class Pet extends AllAnimals {
    constructor(name, color, sound) {
        super (name, color, sound);
    }
}

module.exports = Pet;