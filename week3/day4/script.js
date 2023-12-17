// 🌟 Exercise 1: Simple If/Else Statement
// Create 2 variables, x and y. Each of them should have a different numeric value.
// Write an if/else statement that checks which number is bigger.

// let x = 8;
// let y = 4;
// if(x > y){
//     console.log("x is the biggest number")
// }

// Exercise 2: Chihuahua



// Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).

// 1.Create a variable called newDog where it’s value is “Chihuahua”.

// let newDog = "Chihuahua"


// 2.Check and display how many letters are in newDog
// console.log(newDog.length)
// 9letters


// 3.Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).

// let newDog = "Chihuahua"
// let uppercase = newDog.toUpperCase()
// let lowercase = newDog.toLowerCase()
// console.log(uppercase)
// console.log(lowercase)


// 4.Check if the variable newDog is equal to “Chihuahua”
// if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
// else, console.log ‘I dont care, I prefer cats’

// let newDog = "Chihuahua"

// if (newDog =="Chihuahua"){
//     console.log("I love Chihuahuas, its my favorite dog breed")
// }
// else {
//     console.log("I don't care, I prefer cats")
// }

// let newDog = "Pantera"

// if (newDog =="Chihuahua"){
//     console.log("I love Chihuahuas, its my favorite dog breed")
// }
// else {
//     console.log("I don't care, I prefer cats")
// }



// Exercise 3: Even Or Odd
// 1.Prompt the user for a number and save it to a variable.
// 2.Check whether the variable is even or odd.
// If it is even, display: “x is an even number”. Where x is the actual number the user chose.
// If it is odd, display: “x is an odd number”. Where x is the actual number the user chose
// let x = prompt("Put number: ")

// if(x % 2 == 0) {
//     console.log ("The number is even");
// }
// else {
//     console.log("The mumber is odd")
// }

// Exercise 4: Group Chat

// Using the array above, console.log the number of users that are connected to the group chat based on the following rules:
// If there is no users (the users array is empty), console.log “no one is online”.
// If there is 1 user, console.log “<name_user> is online”.
// If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
// If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
// For example, if there are 5 users, it should display:
// name_user1, name_user2 and 3 more are online


// let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000", "Diggy123"];
// console.log(users.length)
// let totalUsers= users.length - 2


// if(users.length <=3){
// switch (users.length){
//     case 0:
//     console.log("no one is online")
//     break;
//     case 1:
//         console.log(users[0] + "is online");
//     break;
//     case 2:
//         console.log(users[0]+ users[1]+ "are connected")    
// }
// }
// else {
//     console.log(users)
//     console.log(users[0]+ "," + users[1]+ " " + "and"+ " " + totalUsers + " " + "are online")
// }

// Challenge

let sentence ="The movie is not that bad, I like it";
let wordNot= sentence.search("not")
// console.log(wordNot)
let wordBad= sentence.search("bad")
// console.log(wordBad)
// let sentenceFirst= sentence.slice(0,wordNot)
// console.log(sentenceFirst)
// let senetnceTwo= sentence.slice(wordBad+3)
// console.log(senetnceTwo)
// console.log(sentenceFirst + "good" + senetnceTwo)

if( wordNot<wordBad){
    let sentenceFirst= sentence.slice(0,wordNot)
    let senetnceTwo= sentence.slice(wordBad+3)
    console.log(sentenceFirst + "good" + senetnceTwo)
}
else{
    console.log(sentence)
}