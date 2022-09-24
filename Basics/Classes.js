class Test {
  name = "Bang"; // Property (variables attached to class called property)
  call = () => {}; // methods (funtion attached to class called methods)
}

/**
 * constructor that is a default function/method.
 * You can add to any class which will be executed whenever you instantiate the class and the method is
   created just with the name of the method parentheses and then curly braces.
   And then there we can now set up properties with the "this" keyword
 */

class Human {
  // ES6 way
  // constructor(){
  //     this.gender= "male"
  // }
  // ES7 way ( nice and short )
  gender = "male";
  printMyGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  // we can omit constructor and super in ES7
  // constructor(){
  //     super()
  //     this.name="shan"
  //     //this.gender = "can be changed.."
  // }
  // super()

  name = "hello";
  gender = "Sigma male"; // change  directly from here

  printMyname() {
    console.log(this.name, this.gender);
    //this.gender = "changing from methods"
  }
}

// person is the specific  instance of Person
const person = new Person(); // new keyword calls the constructor
person.printMyname();
person.printMyGender();

// *************************************************************

class Vehicle {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }
}

function getVal(params) {
  console.log("hello " + params);
}

class Car extends Vehicle {
  constructor(names) {
    getVal("Bang"); // calling fn before super()
    super(names, "car");
    this.myname = names;
  }

  getName() {
    return (
      "It is a car: " +
      this.name +
      " (coming from parent) .. " +
      this.myname +
      " -> " +
      super.getName()
    );
  }
}
let car = new Car("Tesla");
console.log(car.getName());
console.log(car.getType());

// ***********************************************************

class Animal {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  getName() {
    return this.name;
  }
  getBreed() {
    return this.breed;
  }
}

class subAnimal extends Animal {
  constructor(subname, subbreed) {
    super(subname, subbreed);
    this.subnameRedifined = subname;
  }
  getSubname() {
    return `1 from subclass directly getting name from constructor => ${this.subnameRedifined}`;
  }
  getParentAnimalName() {
    return `2 from subclass name from parent => ${this.name}`;
  }
  getAnimalBreed() {
    return `3 from subclass breed from parent methods => ${super.getBreed()}`;
  }
  getAnimalName() {
    return `4 from subclass name from parent methods => ${super.getName()} + getting 3 => ${this.getAnimalBreed()}`;
  }
}

const animal = new subAnimal("cat", "animal");

function getVal(val) {
  console.log(val);
}

getVal(animal.getName()); // cat
getVal(animal.getBreed()); // animal
getVal("********");
getVal(animal.getSubname()); // ....animal
getVal(animal.getParentAnimalName()); // ... cat
getVal(animal.getAnimalBreed()); // ... animal
getVal(animal.getAnimalName()); // ... cat... ..... animal

// Fn inside Object
let test = {
  x: function () {
    console.log("hey");
  },
};

getVal(test.x);
test.x();

// ------------------------------------
// here we are not using the pointer, we are making a seperate copy
let value = 4;

let value2 = value;

console.log(value, value2);
// value changes bcoz this is not permanent, value is 4 at the time we declare that so later changed value cant change value2
value = 5;
console.log(value, value2);

// Now we are using pointer
let obj1 = {
  value: 10,
};

let obj2 = obj1;
console.log(obj1.value, obj2.value);

obj1.value = 20;
console.log(obj1.value, obj2.value);
// here the value changes if we change anything, its a shallow copy

// for Deep copy
let obj3 = { ...obj1 }; // or let obj3 = Object.assign({}, obj1)
obj1.value = 35;
console.log(obj1.value, obj2.value, obj3.value);

// in case of nested object, spread operator wont do proper deep copy so this is the way
const a = {
  foods: {
    dinner: "Pasta",
  },
};
let b = JSON.parse(JSON.stringify(a));
b.foods.dinner = "Soup";
let c = { ...a };
c.foods.dinner = "Piza"; // here we can see value(Pasta) is overridding
console.log(b.foods.dinner); // Soup
console.log(a.foods.dinner); // Pizza < if we remove spread operator then value will be Pasta >
console.log(c.foods.dinner); // Pizza
