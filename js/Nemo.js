const Fish = require('./Fish.js');

class Nemo extends Fish {
    constructor(name, color, sound) {
        super(name, color, sound);
    }
}

module.exports = Nemo;