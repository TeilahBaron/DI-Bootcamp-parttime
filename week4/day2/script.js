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

// const stock = { 
//         "banana": 6, 
//         "apple": 0,
//         "pear": 12,
//         "orange": 32,
//         "blueberry":1
//     }  

// const prices = {    
//         "banana": 4, 
//         "apple": 2, 
//         "pear": 1,
//         "orange": 1.5,
//         "blueberry":10
//     } 

// const shoppingList = ["banana", "orange", "apple"] 

// function myBill(){
  
//    for (const item of shoppingList){
//     const quantity = stock[item]

//     if(quantity > 0){
//         const price = prices[item]
//         console.log( "price of", item,"is ", price)
//         console.log("in stock", stock[item])
//     } else {
//         console.log ("we don't have ", item, "in stock")
//     }
//    } 

// }
// myBill()


// Exercise 5 : What’s In My Wallet ?
// Instructions
// Note: Read the illustration (point 4), while reading the instructions

// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.

// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01


// 4. To illustrate:

// After you created the function, invoke it like this:

// changeEnough(4.25, [25, 20, 5, 0])
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)


// function changeEnough(itemPrice, amountOfChange){
//     console.log("item price is ", itemPrice)

//     const summ = calculateSum(amountOfChange)
//     if (summ > itemPrice){
//         console.log("you can afford")
//         return true
//     } else {
//         console.log("you can't afford ")
//         return false
//     }
// }

// function calculateSum(array){
//     let sum = 0

//     for (let i = 0; i < array.length;i++){
//         let coinValue
//         const numberOfCoins = array[i]
        
//         if(i === 0){coinValue = 0.25}
//         if(i === 1){coinValue = 0.10}
//         if(i === 2){coinValue = 0.05}
//         if(i === 3){coinValue = 0.01}

//         console.log("we have ", numberOfCoins, "coins that we have is a value", coinValue)
//         sum = sum + numberOfCoins * coinValue
//     }
//     console.log("total is ", sum)

//     return sum
// }

// changeEnough(4.25, [25, 20, 5, 0])
// changeEnough(14.11, [2,100,0,0])

// 🌟 Exercise 6 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.

// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.
// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// Call the function totalVacationCost()

// hotelCost()

function hotelCost(){

   let answers

   while (!OnlyNumbers(answers)){
   answers = prompt("how many nights you will stay?") 
}
   const numberOfNigts = Number(answers)
   const costNight = 140
   const totalPrice = numberOfNigts* costNight
//    console.log("total cost of nights : ", totalPrice)
   return totalPrice
  
}


function OnlyNumbers(str){
    const regex = new RegExp(/^[0-9]*$/)
    return regex.test(str)
}



function withNumbers(str){
    const regex = new RegExp(/\d/)
    return regex.test(str)
}

const priceFlight = planeRideCost()
// console.log("plane price: ", priceFlight)


function planeRideCost(){

    let dest = ""

     while(dest == "" || withNumbers(dest)){
     dest = prompt("where are you go?")
    }
    
    // console.log ("you are going to ", dest)
   

    if(dest === "London") return 180
    if(dest === "Paris") return 380
    return 500

}
// rentalCarCost()

function rentalCarCost(){
    let answers

    while (!OnlyNumbers(answers)){
    answers = prompt("how many days you will rent the car?") 
 }
 const dayPrice = 40
 const numberDays = Number(answers)

 let discount = 0
 if (numberDays>= 10) discount = 0.05
 const totalPrice = dayPrice * numberDays * (1-discount)
//  console.log("rent price is", totalPrice)
 return totalPrice
}

function totalVacationCost(){
    const carPrice = rentalCarCost()
    console.log("car costs: ", carPrice)

    const nights = hotelCost()
    console.log("hotel costs: ", nights)

    const priceFlight = planeRideCost()
    console.log("Plane: ", priceFlight)

    const totalPrice = carPrice + nights + priceFlight
    console.log("total price of vacation: ", totalPrice)
}
totalVacationCost()