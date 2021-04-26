const Dog = require('./js/Dog.js');
const Cat = require('./js/Cat.js');
const Hamster = require('./js/Hamster.js');
const Chicken = require('./js/Chicken.js')
const Parrot = require('./js/Parrot.js')
const Eagle = require('./js/Eagle.js')
const Dragonfly = require('./js/Dragonfly.js')
const Goldfish = require('./js/Goldfish.js')
const Nemo = require('./js/Nemo.js')


const rexas = new Dog('Rexas', 'black', 'Au Au!');
const rainis = new Cat('Rainis', 'brown', 'Miau Miau!');
const hamsteris = new Hamster('Hamsteris', 'grey', 'Cyp pyp') 

const chicken = new Chicken('Visciukas', 'yellow', 'Cyp cyp')
chicken.flyAway();

const parrot = new Parrot('Kakadu', 'red', 'Labas')
parrot.flyAway();

const eagle = new Eagle('Ben', 'grey', 'kar kar')
eagle.flyAway();

const dragonfly = new Dragonfly('Lobis', 'green', 'Zzz')
dragonfly.flyAway();

const goldfish = new Goldfish('Sara', 'golden', 'Bul Bul')
goldfish.makeWish();

const nemo = new Nemo('Nemo', 'red/white', 'Hello')
nemo.swimAway();
nemo.makeWish();

rexas.introduce();

chicken.introduce();

goldfish.introduce();
goldfish.makeWish();

