 function  Car(name, model) {
	this.name = name
	this.model = model
}

Car.prototype.run = function() {
	return `${this.name} is actually very fast`
}

const car = new Car('Cherokee','2019')
console.log(car)


function Mage(name, model, year) {
    // Chain constructor with call
    Car.call(this, name, model);

    this.year = year;
}

// At this point, we can create a new instance of Mage using the same properties as Hero as well as a new one we added.

const car2 = new Mage('Honda', '2019', 'Model 1');
console.log(car2)

const animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' }
];

for (let i = 0; i < animals.length; i++) {
  (function(i) {
    this.print = function() {
      console.log('#' + i + ' ' + this.species
                  + ': ' + this.name);
    }
    this.print();
  }).call(animals[i], i);
}

// GENERATORS
function* generate() {
    console.log('invoked 1st time');
    yield "Eben";
    console.log('invoked 2nd time');
    yield 2;
}
let  gen = generate()
console.log(gen.next())
console.log(gen.next())

function* forever() {
  let index = 0;
  while (true) {
      yield index++;
  }
}

let f = forever();
console.log(f.next()); // 0
console.log(f.next()); // 1
console.log(f.next()); // 2

// Maps
const cars = new Map()
cars.set('name', 'Honda')
cars.set('year', '2020')
cars.set('model', '2015')

console.log(cars)

for(const [key, value] of cars) {
  console.log(key, value)
}

// SETS
let partyItems = new Set(['🍕', '🍾', '🎊']);
let items = partyItems.values();

console.log(items.next());
console.log(items.next());
console.log(items.next());
console.log(items.next().done);
