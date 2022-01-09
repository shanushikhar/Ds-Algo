// Primitive type
/**
 * numbers, strings, booleans, these are so-called primitive types whenever you reassign or you store
a variable in another variable.
It will copy the value.
 */
let x = 5
let y = x
console.log(y)

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
    name: "bang"
}

let AnotherPerson = person_identity
let dont_Copy_reference_pointer = { ...person_identity }

person_identity.name = "Sumakar"

console.log(AnotherPerson)
console.log(dont_Copy_reference_pointer)