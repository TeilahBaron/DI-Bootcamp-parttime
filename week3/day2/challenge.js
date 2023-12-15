// Exercise 1:
// Remove Banana from the array.
// Sort the array in alphabetical order.
// Add “Kiwi” to the end of the array.
// Remove “Apples” from the array. Don’t use the same method as in part 1.
// Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
// At the end you should see this outcome:



// const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
// console.log(fruits)
// fruits.splice(0,1)
// console.log(fruits)
// fruits.sort()
// console.log(fruits)


// fruits.push('Kiwi')
// console.log(fruits)
// delete fruits[0]
// console.log(fruits)
// fruits.reverse()
// console.log(fruits)

// Exercise 2:

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1])
console.log(moreFruits[1][1])
console.log(moreFruits[1][1][0])
