// 🌟 Exercise 1 : Information
// Instructions
// Part I : function with no parameters

// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.

// function infoAboutMe(){
//     console.log("My name is Teilah, I'm 35 and I love travelling")
// }
// infoAboutMe()


// Part II : function with three parameters

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

// function infoAboutPerson(personName, personAge,personFavoriteColor ){
//     console.log("Your name is" , personName)
//     console.log("You are ", personAge, "years old")
//     console.log( "Your favorite color is", personFavoriteColor)
// }
// infoAboutPerson("Josh", 12, "yellow")
// infoAboutPerson("Josh", 12, "yellow")


// 🌟 Exercise 2 : Tips
// Instructions
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// Create a function named calculateTip() that takes no parameter.

// Inside the function, use prompt to ask John for the amount of the bill.

// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.

// Console.log the tip amount and the final bill (bill + tip).

// Call the calculateTip() function.

// function calculateTip(){
//     const billAmount = Number (prompt("How much the bill?"))
//     let tipPerc;
//     if (billAmount<50) tipPerc = 0.2
//     if(billAmount >= 50 && billAmount < 200) tipPerc = 0.15
//     const tip = billAmount * (1 + tipPerc)
//     console.log("bill is" , billAmount, "$")
//     console.log("tips", tip , "$")
//     console.log("total: ", billAmount + tip, "$")

// }
// calculateTip()

// 🌟 Exercise 3 : Find The Numbers Divisible By 23
// Instructions
// Create a function call isDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313

// function isDivisible(){
//     let summary = 0;
//     for (let i = 0; i < 500; i++){
//         if (i % 23 === 0){
//         console.log(i)
//          summary = summary+i
//         }
//     }
//     console.log( "summary", summary)
// }
// isDivisible()


// 🌟 Exercise 4 : Shopping List
// Instructions
// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 
// Add the stock and prices objects to your js file.

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

// Create a function called myBill() that takes no parameters.

// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.

// Call the myBill() function.

// Bonus: If the item is in stock, decrease the item’s stock by 1

const stock = { 
        "banana": 6, 
        "apple": 0,
        "pear": 12,
        "orange": 32,
        "blueberry":1
    }  

const prices = {    
        "banana": 4, 
        "apple": 2, 
        "pear": 1,
        "orange": 1.5,
        "blueberry":10
    } 

const shoppingList = ["banana", "orange", "apple"] 

function myBill(){
  
   for (const item of shoppingList){
    const quantity = stock[item]

    if(quantity > 0){
        const price = prices[item]
        console.log( "price of", item,"is ", price)
        console.log("in stock", stock[item])
    } else {
        console.log ("we don't have ", item, "in stock")
    }
   } 

}
myBill()