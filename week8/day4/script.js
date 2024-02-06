// part1

const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

// Two arrays fruits and vegetables are declared.
// Then, a new array result is created using spread syntax (...). It starts with the string 'bread', then spreads the elements of vegetables, adds the string 'chicken', and finally spreads the elements of fruits.
// result will contain ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange'].
// This result array is then logged to the console.

// part2
const country = "USA";
console.log([...country]);
// will log ['U', 'S', 'A'].

// bonus
let newArray = [...[,,]];
console.log(newArray);
// this output indicates that newArray is an array with two empty items.