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