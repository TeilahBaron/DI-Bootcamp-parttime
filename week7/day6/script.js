// Exercise 1 : Scope

// #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// / #1
// The value of a will be 3.
// Expl: Inside the function, a is initially assigned 5, but then it is reassigned to 3 inside the if block. So, when the alert is called, it will display 3.

// #1.1 - run in the console:
// funcOne()

// function funcOne() {
//     const a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// if the variable is declared with const instead of let, it will throw an error because you cannot reassign a constant variable.


//#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()

// funcTwo() sets the global variable a to 5 before the second call to funcThree(), so both alerts in funcThree() will display 5.
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// If the variable is declared with const instead of let, it will throw an error because you cannot reassign a constant variable.

// #3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// #3.1 - run in the console:
// funcFour()
// funcFive()

// funcFour() assigns "hello" to the global variable a. funcFive() then alerts the value of the global variable a, which is "hello".


//#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// #4.1 - run in the console:
// funcSix()

// the value of a will be "test" inside funcSix().
// Explanation: Inside funcSix(), a is declared as a local variable with the value "test", which shadows the global variable a. So, the alert will display "test".

//#4.2
// #4.2 What will happen if the variable is declared 
// with const instead of let ?if the variable is declared with const instead of let, it will throw an error 

//#5
// let a = 2;
// const a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console

// inside the if block, the value of a will be 5, and outside of the if block, the value of a will be 2.
// Inside the if block, a new block-scoped variable a is declared and initialized to 5, shadowing the outer variable a. So, inside the if block, a refers to the inner variable with a value of 5. Outside of the if block, a still refers to the outer variable, which is 2.
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// If the variable is declared with const instead of let, it will not be affected since both declarations are within separate scopes

// Exercise 2 : Ternary Operator

// Using the code below:

// function winBattle(){
//     return true;
// }
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.

// const winBattle = () => {
//     return true;
// };

// let experiencePoints = winBattle() ? 10 : 1;
// console.log(experiencePoints);


// 🌟 Exercise 3 : Is It A String ?

// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output

// const isString = (value) => {
//     return typeof value === 'string';
// };

// console.log(isString('hello')); // true
// console.log(isString([1, 2, 4, 0])); // false

// 🌟 Exercise 4 : Colors
// Using this array :

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.


// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach((color, index) => {
//     console.log(`${index + 1}# choice is ${color}.`);
// });

// if (colors.includes("Violet")) {
//     console.log("Yeah");
// } else {
//     console.log("No...");
// }

// Exercise 5 : Colors #2

// Instructions
// Using these arrays :

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th", "st", "nd", "rd"];

// colors.forEach((color, index) => {
//     const suffix = index < 3 ? ordinal[index + 1] : ordinal[0];
//     console.log(`${index + 1}${suffix} choice is ${color}.`);
// });

// Exercise 6 : Bank Details

// Use let for bankAmount because its value may change over time.
let bankAmount = 6000;

// Use const for vatPercentage because the VAT percentage doesn't change.
const vatPercentage = 0.17;

const expenses = ["+200", "-100", "+146", "+167", "-2900"];

// Function to calculate the taxed amount based on the expense and VAT percentage.
const calculateTaxedAmount = (expense) => {
    const amount = parseFloat(expense); 
    const taxedAmount = amount * (1 + vatPercentage); 
    return taxedAmount.toFixed(2); // Round to 2 decimal places and return as a string.
};

const taxedExpenses = expenses.map((expense) => {
    // Check if the expense is positive or negative.
    if (expense.startsWith("+")) {
        // If positive
        return "+" + calculateTaxedAmount(expense.slice(1)); // 
    } else {
        // If negativewith a "-" sign.
        return "-" + calculateTaxedAmount(expense.slice(1)); 
    }
});


taxedExpenses.forEach((expense) => {
    bankAmount += parseFloat(expense);
});

// Display the current bankAccount standing at the end of the month.
console.log("Bank Account Balance:", bankAmount.toFixed(2)); 