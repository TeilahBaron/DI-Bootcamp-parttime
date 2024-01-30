let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
}

// Arrow function to display fruits using forEach
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    });
}

// Arrow function to clone groceries and make modifications
const cloneGroceries = () => {
    let user = client; // Copy the value of client to user
    client = "Betty"; // Change the value of the client variable

    let shopping = { ...groceries }; // Create a shallow copy of the groceries object

    shopping.totalPrice = "35$"; // Modify the totalPrice key in the shopping object
    shopping.other.paid = false; // Modify the paid key in the shopping object

    console.log("User:", user); // Will print "User: John" because user is a separate copy of the client variable
    console.log("Client:", client); // Will print "Client: Betty" because the client variable was modified
    console.log("Shopping:", shopping); // Will print the modified shopping object
}

// Invoke the displayGroceries function
console.log("Displaying groceries:");
displayGroceries();

// Invoke the cloneGroceries function
console.log("\nCloning and modifying groceries:");
cloneGroceries();
