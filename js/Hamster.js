const Pet = require('./Pet.js');

class Hamster extends Pet {
    constructor(name, color, sound) {
        super(name, color, sound);
        this.canEatTillDeath = true;
    }
}

module.exports = Hamster;