// Create an array
const fruits = ["apple", "banana", "cherry", "date"];

// Push: Add an element to the end of the array
fruits.push("fig");

console.log("Array:", fruits);

// Pop: Remove the last element from the array
fruits.pop();

console.log("Array:", fruits);

// Unshift: Add an element to the beginning of the array
fruits.unshift("apricot");

console.log("Array:", fruits);

// Shift: Remove the first element from the array
fruits.shift();

console.log("Array:", fruits);

// Concat: Concatenate two arrays
const moreFruits = ["grape", "kiwi"];
const allFruits = fruits.concat(moreFruits);

console.log("Array:", allFruits);

// Slice: Create a new array by extracting a portion of the original array
const slicedFruits = allFruits.slice(1, 4);

console.log("Array:", allFruits);

// Splice: Modify the array by adding/removing elements at a specified index
allFruits.splice(2, 1, "blueberry", "raspberry");

console.log("Array:", allFruits);

// indexOf: Find the index of a specific element
const index = allFruits.indexOf("cherry");

console.log('Index of "cherry":', index);

// includes: Check if an element is in the array
const hasCherry = allFruits.includes("cherry");

console.log('Includes "cherry":', hasCherry);

// Join: Create a string from the array elements
const fruitString = allFruits.join(", ");

console.log("Joined Array:", fruitString);

// Reverse: Reverse the order of elements in the array
const reverseFruits = allFruits.reverse();

console.log("reverseArray:", reverseFruits);

// Sort: Sort the elements in the array (alphabetically for strings)
const sortedFruits = allFruits.sort();

console.log("sortedArray:", sortedFruits);

// Filter: Create a new array with elements that pass a test
const filteredFruits = allFruits.filter((fruit) => fruit.length > 5);

console.log("Filtered Array:", filteredFruits);

// Map: Create a new array by applying a function to each element
const uppercasedFruits = allFruits.map((fruit) => fruit.toUpperCase());

console.log("Uppercased Array:", uppercasedFruits);
