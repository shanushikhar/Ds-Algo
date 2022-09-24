// Primitive type
/**
 * numbers, strings, booleans, these are so-called primitive types whenever you reassign or you store
a variable in another variable.
It will copy the value.
 */
let x = 5;
let y = x;
console.log(y);

// Reference
/**
 person_identity the object is stored in memory and in the constant person_identity we store a pointer to that place in memory.
And if we then assign person_identity to AnotherPerson that pointer will be copied.
We can see that this is the case if we changed person_identity.name after having it copied.

 it just copied the pointer and points to the exact same object in memory as
person_identity does.
So if we change name on person we automatically change it for secondPerson.

so if we want to copy only the object i.e. immutable way then  use "spread operator"

 */

let person_identity = {
  name: "bang",
};

let AnotherPerson = person_identity;
let dont_Copy_reference_pointer = { ...person_identity };

person_identity.name = "Sumakar";

console.log(AnotherPerson);
console.log(dont_Copy_reference_pointer);

//----------------------------------------
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
