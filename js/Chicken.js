const Bird = require('./Bird.js');

class Chicken extends Bird {
    constructor(name, color, sound) {
        super(name, color, sound);
    }
}

module.exports = Chicken;