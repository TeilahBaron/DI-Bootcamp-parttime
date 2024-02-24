// Exercise 1 : Location
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

//output will be: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// Exercise 2: Display Student Info
// function displayStudentInfo(objUser){
//     const { first, last } = objUser;
//     return `Your full name is ${first} ${last}`;
// }

// console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));
//  this code:

// const { first, last } = objUser; destructures the objUser parameter to extract the first and last properties.
// The template literal ${first} ${last} concatenates the extracted values to form the desired output string.
// console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'})); calls the function with an object containing first and last properties and logs the returned string to the console.

// Exercise 3: User & Id

// const users = { user1: 18273, user2: 92833, user3: 90315 };

// Convert object to array of key-value pairs
// const usersArray = Object.entries(users);

// Multiply user IDs by 2
// const modifiedUsersArray = usersArray.map(([key, value]) => [key, value * 2]);

// console.log(modifiedUsersArray);
// Output:[
//     [
//         "user1",
//         36546
//     ],
//     [
//         "user2",
//         185666
//     ],
//     [
//         "user3",
//         180630
//     ]
// ]


// Exercise 4 : Person Class
// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const member = new Person('John');
//   console.log(typeof member);
// This code defines a class Person with a constructor that sets the name property of an instance of the class. Then, it creates an instance member of the Person class with the name 'John'. Finally, it logs the type of member to the console.This code defines a class `Person` with a constructor that sets the `name` property of an instance of the class. Then, it creates an instance `member` of the `Person` class with the name `'John'`. Finally, it logs the type of `member` to the console.

// The output will be: object

// Exercise 5 : Dog Class
// class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   };

  // 1
// class Labrador extends Dog {
//     constructor(name, size) {
//       this.size = size;
//     }
//   };
 // 2
//  class Labrador extends Dog {
//     constructor(name, size) {
//       super(name);
//       this.size = size;
//     }
//   };

  // 3
// class Labrador extends Dog {
//     constructor(size) {
//       super(name);
//       this.size = size;
//     }
//   };
   // 4
// class Labrador extends Dog {
//     constructor(name, size) {
//       this.name = name;
//       this.size = size;
//     }
//   };
// To successfully extend the `Dog` class, the constructor of the subclass (`Labrador` in this case) must call `super()` within its constructor to invoke the constructor of the superclass (`Dog`). The `super()` call is necessary to initialize properties defined in the superclass.



// 1. Incorrect: This constructor of `Labrador` does not call `super(name)`, so it will result in an error. `this.size = size;` is attempted before calling `super()`, which violates the requirement of calling `super()` first in the subclass constructor.

// 2. **Correct**: This constructor correctly calls `super(name)` to invoke the superclass constructor. It initializes the `name` property of the `Dog` superclass using `super(name)`, and then initializes the `size` property of the `Labrador` subclass.

// 3. Incorrect: This constructor attempts to call `super(name)` without passing the `name` argument. It will result in an error because `name` is not defined in the constructor's parameter list.

// 4. Incorrect: This constructor does not call `super(name)`, which is required to initialize the `name` property inherited from the `Dog` superclass. It directly assigns `name` and `size` properties without invoking the superclass constructor.

// Option 2 is the correct choice.  

// Exercise 6 : Challenges
// Evaluate these (ie True or False)

// [2] === [2] 
// When you use === in JavaScript to compare objects (arrays are objects in JavaScript), it checks for reference equality. That is, it checks if both operands refer to the same object in memory.
// [2] creates a new array object, as does [2].
// These two arrays are distinct objects in memory, so the comparison will evaluate to false.

// {} === {}

// when comparing objects ({} creates a new object), === checks for reference equality. In this case, both {} objects are distinct objects in memory, so the comparison will also evaluate to false.

// [2] === [2] => False
// {} === {} => False



// Declares object1 and initializes it with an object having a number property set to 5.
const object1 = { number: 5 };  
// Assigns object2 to reference the same object as object1. They now both point to the same object in memory.
const object2 = object1; 
// Similarly, assigns object3 to reference the same object as object2, which is the same object as object1. Now, object1, object2, and object3 all refer to the same object in memory.
const object3 = object2; 
// Declares object4 and initializes it with a new object having a number property set to 5. This object is distinct from the one referenced by object1, object2, and object3.
const object4 = { number: 5};

// Changes the number property of the object referenced by object1 to 4.
object1.number = 4;

// This will output 4 because object2 references the same object as object1, so any changes made to the object through object1 will be reflected in object2.
console.log(object2.number)
// Similarly, this will also output 4 because object3 references the same object as object1 and object2
console.log(object3.number)
// This will output 5 because object4 references a different object from object1, object2, and object3. The change made to object1 does not affect object4.
console.log(object4.number)

// output will be: 4 4 5

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mamal extends Animal {
    sound(noise) {
        return `Moooo I'm a ${this.type}, named ${this.name} and I'm ${this.color}. ${noise}`;
    }
}

const farmerCow = new Mamal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("moos"));
