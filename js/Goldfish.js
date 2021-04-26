const Fish = require('./Fish.js');

class Goldfish extends Fish {
    constructor(name, color, sound) {
        super(name, color, sound);
        this.grantsWishes = true;
    }
}

module.exports = Goldfish;