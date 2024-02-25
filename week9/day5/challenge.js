// Instructions
// Create a function that:

// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.
// Some Help

// What is an anagram?
// An anagram is another word or phrase formed by rearranging letters of the first word or phrase.


// Example of anagrams

// "Astronomer" is an anagram of "Moon starer"
// "School master" is an anagram of "The classroom"
// "The Morse Code" is an anagram of "Here come dots"


// Do we need to consider whitespace?
// Trim whitespace prior to comparison.

function areAnagrams(str1, str2) {
    // Remove whitespace and convert strings to lowercase
    str1 = str1.replace(/\s+/g, '').toLowerCase();
    str2 = str2.replace(/\s+/g, '').toLowerCase();
    
    
    if (str1.length !== str2.length) {
        return false;
    }
    
    
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    
    
    return sortedStr1 === sortedStr2;
}

// Example 
console.log(areAnagrams("Astronomer", "Moon starer")); // true
console.log(areAnagrams("School master", "The classroom")); // true
console.log(areAnagrams("The Morse Code", "Here come dots")); // true
