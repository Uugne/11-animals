const Pet = require('./Pet.js');

class Cat extends Pet {
    constructor(name, color, sound) {
        super(name, color, sound);
    }
}

module.exports = Cat;