// Exercise 1 : Comparison

// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than or equal to 10
// the promise rejects if argument is greater than 10.
// Test:

// //In the example, the promise should reject
// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// //In the example, the promise should resolve
// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// function compareToTen(num) {
//     return new Promise((resolve, reject) => {
//       if (num <= 10) {
//         resolve(`${num} is less than or equal to 10`);
//       } else {
//         reject(`${num} is greater than 10`);
//       }
//     });
//   }
  
//   // Test cases
//   compareToTen(15)
//     .then(result => console.log(result))
//     .catch(error => console.log(error));
  
//   compareToTen(8)
//     .then(result => console.log(result))
//     .catch(error => console.log(error));
  


// 🌟 Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.

// function delayedPromise() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("success");
//       }, 4000); // 4 seconds delay
//     });
//   }
  
//   // Test the promise
//   delayedPromise()
//     .then(result => {
//       console.log(result); // This will be executed after 4 seconds
//     })
//     .catch(error => {
//       console.error(error); // This won't be executed in this case
//     });
  

// 🌟 Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”


// Promise that resolves with a value of 3
const resolvePromise = Promise.resolve(3);

// Promise that rejects with the string "Boo!"
const rejectPromise = Promise.reject("Boo!");


resolvePromise
  .then(result => {
    console.log("Resolved:", result); 
  })
  .catch(error => {
    console.error("Error:", error); 
  });

rejectPromise
  .then(result => {
    console.log("Resolved:", result); 
  })
  .catch(error => {
    console.error("Error:", error); 
  });
