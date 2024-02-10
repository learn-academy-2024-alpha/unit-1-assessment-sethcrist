// UNIT 1 ASSESSMENT: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code-challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and evaluates which of the strings has more characters. Use the test variables provided.

const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// Explain your code:

// --------------------1) Create a function that takes in an array of numbers and returns the sum of all the numbers. Use the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// Expected output: 15
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 17

// psudo code:
    // input: array of numbers
    // for loop to itterate over array
    // add numbers
    // output: sum of array
const sumOfNumbers = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
         sum += array[i]
    }
    return sum
}
console.log(sumOfNumbers(padres1998WorldSeriesRuns));
// Explain your code:
    // line 34 is our function with an array as a parameter, 
    // line 35 is our variable to store the added numbers, 
    // line 36 is a for loop that itterates over each element(i++ and .length) in the array starting at the 0 index(2), 
    // line 37 is a short hand notation of sum = sum + array that adds up the elements starting at the first index, 
    // line 39 returns the value of each element added up.

// --------------------2) Create a function that takes in a string and  returns the string with all the characters in reversed order. Use the test variable provided below.

const lesMiserables = "Jean Valjean"
// Expected output: "naejlaV naeJ"
const lionKing = "Simba"
// Expected output: "abmiS"

// psudo code:
    // input: string
    // .split("") to split the string into seperate characters
    // .reverse() to reverse the elements in the arrray
    // .join("") to change the array back into a string
    // output: the string reversed

const reversed = (str) => {
    return str.split("").reverse().join("")
}
 console.log(reversed(lesMiserables));

// Explain your code:
    //created a function that took a string as a parameter and returned it using the .split(), .reverse() and .join() method reversed

// --------------------3) Create a function that takes in an array and returns an array with only the items from the third, fourth, and fifth indexes. Use the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: [42, 5, -5]
const cohortList = ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot"]
// Expected output: ["Delta", "Echo", "Foxtrot"]

// psudo code: 
    // input: array
    // variable to hold new array
    // for loop to itterate over the array
    // .push to populate our empty array
    // output: new array with items from the 3rd, 4th, and 5th index
const thridFourthFifth = (array) => {
    let newArray = []
    for (let i = 3; i <= 5; i++) {
        newArray.push(array[i])
    }
    return newArray
}
console.log(thridFourthFifth(stockExchange));
// Explain your code:
    // created a function with a variable named newArray that is an empty array. this will create our new array. our for loop itterates over the array starting at the 3rd index(i = 3) and increase by one until we get the the 5th index of the array (i <= 5) where it will stop. The .push() method will populate that data in our variable newArray.