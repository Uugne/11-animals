const Bird = require('./Bird.js');

class Dragonfly extends Bird {
    constructor(name, color, sound) {
        super(name, color, sound);
        this.imposter = true;
    }
}

module.exports = Dragonfly;