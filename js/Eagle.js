const Bird = require('./Bird.js');

class Eagle extends Bird {
    constructor(name, color, sound) {
        super(name, color, sound);
    }
}

module.exports = Eagle;