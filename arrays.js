// array can store multiple values each value has and index and each index had a reference in a memory address. 
// creating a empty array its very common to use const instead of let to declare an array variable. if you use const it means you dont use that varaibale name again.
//empty array
const arr = Array()
console.log(arr)

//this is the most recommended way to create a empty array
const arr1 = ([])
console.log(arr1)

//creating arrays with vlaues
const numbers = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 33]


console.log('numbers:', numbers)
console.log('numbers of numbers:', numbers.length)

//array different data types

const arr2 = [
    'Asabeneh',
    250,
    true, //boolean
    { country: 'Finland', city: 'Helsinki' }, //object
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }, //objects
]
console.log(arr2)

// creating array using splits
let js = 'Javacript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript)

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let txt =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')

console.log(words)
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]

// Accessing array items using index
const fruits = ['banana', 'orange', 'mango', 'lemon']
console.log(fruits[0])
console.log(fruits[3])

const numbers2 = [0, 3.14, 9.81, 37, 98.6, 100] // set of numbers

console.log(numbers2.length) // => to know the size of the array, which is 6
console.log(numbers2) // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers2[0]) //  -> 0
console.log(numbers2[5]) //  -> 100

let lastIndex = numbers2.length - 1
console.log(numbers2[lastIndex]) // -> 100

// Modifying array element
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers3[0] = 23 //changed 1 which had the index of 0 to 23
numbers3[9] = 100 //changed 10 which had the index of 9 to 100

console.log(numbers3) // [23, 2, 3, 4, 5, 6, 7, 8, 9, 100]

const countries = [
    'United States',
    'Mexico',
    'Canada',
    'England',
    'Africa'
]

const lastCountry = countries.length - 1

countries[lastCountry] = 'Barbados'

console.log(countries) //["United States", "Mexico", "Canada", "England", "Barbados"]

// Methods to manipulate array
/*There are different methods to manipulate an array. These are some of the available methods to deal with 
arrays:Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift*/

//Array Constructor

//Array to create an array
const arr4 = Array() // creates a empty array

const eightEmptyValues = Array(8) // creates 8 empty values
console.log(eightEmptyValues) //[empty × 8]

//CREATE STATIC VALUE WITH .FILL
//fill: Fill all the array elements with a static value
const rapper = Array() //create a empty array

const topFiveRapper = Array(5).fill('Dylon') //creates 5 element values filled with 'Dylon'
console.log(topFiveRapper) // ["Dylon", "Dylon", "Dylon", "Dylon", "Dylon"]

/*
Concatenating array using concat
concat:To concatenate (join) two arrays.
*/
const east = ['knicks', 'nets', 'bucks']
const west = ['clippers, nuggets, lakers']
const nbaTeams = east.concat(west)
const nbaTeams2 = west.concat(east)
console.log(nbaTeams)// ["knicks", "nets", "bucks", "clippers, nuggets, lakers"]
console.log(nbaTeams2)// ["clippers, nuggets, lakers", "knicks", "nets", "bucks"]

const laLega = ['Barca', 'Madrid', 'Atletico']
const prem = ['Liverpool', 'Man City', 'Chelsea']
const futbol = prem.concat(laLega)
console.log(futbol)// ["Liverpool", "Man City", "Chelsea", "Barca", "Madrid", "Atletico"]