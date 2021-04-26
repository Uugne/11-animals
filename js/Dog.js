const Pet = require('./Pet.js');

class Dog extends Pet {
    constructor(name, color, sound) {
        super(name, color, sound);
     
    }
}

module.exports = Dog;