class AllAnimals {
    constructor(name, color, sound) {
        this.name = name;
        this.color = color;
        this.sound = sound;
    }

    voice() {
        console.log(`${this.name} says ${this.sound}`);
    }

    introduce() {
        console.log(`My name is ${this.name}, I have ${this.color} skin and I say ${this.sound}`);
    }
}

module.exports = AllAnimals;