const Bird = require('./Bird.js');

class Parrot extends Bird {
    constructor(name, color, sound) {
        super(name, color, sound);
    }
}

module.exports = Parrot;