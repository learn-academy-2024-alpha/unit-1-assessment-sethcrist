// UNIT 1 ASSESSMENT: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
 console.log(cohort.length)

// a) Your answer: will give us 10 because the .length method counts all the characters in the string including the space.
// b) Verify and explain: my answer was correct, the .length method counts the characters and the space between the characters.

// --------------------2) What will this log?

const greeting = "Hello World!"
 console.log(greeting[4])

// a) Your answer: this will print the character "o" in the terminal because it is at the 4th index of the string
// b) Verify and explain: i was correct greeting[4] outputs "o" in the terminal because it is at the 4th index

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
 console.log(languages[index])

// a) Your answer: this will log Ruby in the terminal because it is at the first index of the languages array
// b) Verify and explain: correct, because javascript is at the 0 index and ruby is at the 1st index of the array

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
 //console.log(weekendDays.toUpperCase())

// a) Your answer:this will output saturday, sunday in all caps on the termianl
// b) Verify and explain: incorrect: and i think its because its an array and not a string

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
 console.log(typeof dataTypes.length)

// a) Your answer: i think this will log the datatypes as being strings and that there is 33 characters in this array. and that is excluding the "" 
// b) Verify and explain: incorrect because the .length returns the numeric value and so dataTypes.length will log: number

