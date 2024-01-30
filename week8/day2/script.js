// Exercise 1 : Find The Sum

// const sum = (a, b) => a + b;
// console.log(sum(3, 5)); // Output: 8

// Exercise 2 : Kg And Grams

// Function Declaration
// function kgToGramsDeclaration(weightInKg) {
//     return weightInKg * 1000;
// }

// Invoking Function Declaration
// console.log(kgToGramsDeclaration(2));

// Function Expression
// const kgToGramsExpression = function(weightInKg) {
//     return weightInKg * 1000;
// };

// Invoking Function Expression
// console.log(kgToGramsExpression(2));

// One Line Arrow Function
// const kgToGramsArrow = weightInKg => weightInKg * 1000;

// Invoking One Line Arrow Function
// console.log(kgToGramsArrow(2));


// Exercise3


// (function(numberOfChildren, partnerName, geographicLocation, jobTitle) {
//     const fortuneMessage = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;

 
//     document.getElementById("fortuneOutput").textContent = fortuneMessage;
// })(2, "Natan", "Tel-Aviv", "Fullstack Developer");



// Exercise4


// Self-invoking function
// (function(userName) {
//     // Create a new div element
//     const welcomeDiv = document.createElement("div");
//     welcomeDiv.classList.add("navbar-text");

    // Add content to the div
//     welcomeDiv.innerHTML = `
//         Welcome, ${userName}!
//         <img src="/Users/teilahbaron/Documents/GitHub/DI-Bootcamp-parttime/week8/day2/profile_picture.jpeg" alt="Profile Picture" class="ml-2" style="width: 30px; height: 30px; border-radius: 50%;">
//     `;

   
//     document.querySelector(".navbar-nav").appendChild(welcomeDiv);
// })("Nate");


// Exercise 5


// Part I
function makeJuice(size) {
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        const juiceOrder = `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}`;
        document.getElementById("output").textContent = juiceOrder;
    }

    addIngredients("apple", "orange", "carrot");
}

makeJuice("medium");

// Part II
function makeJuiceWithIngredients(size) {
    const ingredients = [];

    
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3);
    }

    function displayJuice() {
        const juiceOrder = `The client wants a ${size} juice, containing ${ingredients.join(", ")}`;
        document.getElementById("output").textContent = juiceOrder;
    }

    addIngredients("apple", "orange", "carrot");
    addIngredients("spinach", "celery", "cucumber");

    displayJuice();
}

makeJuiceWithIngredients("large");
