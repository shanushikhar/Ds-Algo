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

const person = new Person();
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
