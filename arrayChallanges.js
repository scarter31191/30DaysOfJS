console.log('challanges')

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]

  
  /*
  X = revisit * = understood X* = write notes
    Declare an empty array; *
    Declare an array with more than 5 number of elements *
    Find the length of your array *
    Get the first item, the middle item and the last item of the array *
    Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. 
        The array size should be greater than 5 ****X study data types****
    Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon *
    Print the array using console.log() *
    Print the number of companies in the array *
    Print the first company, middle and last company *
    Print out each company **** print array to string using toString() ****
    Change each company name to uppercase one by one and print them out X* practice for loops
    Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies. ***X study .join()
    Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found *X see if you can make a method to return company name
    Filter out companies which have more than one 'o' without the filter method X
    Sort the array using sort() method *
    Reverse the array using reverse() method *
    Slice out the first 3 companies from the array *
    Slice out the last 3 companies from the array *
    Slice out the middle IT company or companies from the array *
    Remove the first IT company from the array *
    Remove the middle IT company or companies from the array
    Remove the last IT company from the array
    Remove all IT companies

  */

const emptyArray = Array()
console.log(emptyArray)// []

const numberOfElements = [1, 2, 3, 4, 5, 6, 7]
console.log(numberOfElements)
console.log(numberOfElements.length)

const firstNum = numberOfElements[0]
console.log(firstNum)// 1
const middleNum = numberOfElements[3]
console.log(middleNum)// 4
const lastNum = numberOfElements[6]
console.log(lastNum)// 7

const mixedDataTypes = ['Boolean', 'Numbers', 'Strings', null, undefined, 'Symbol', 'BigInt']
console.log(mixedDataTypes)

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
console.log(itCompanies.length)

const firstItCompany = itCompanies[0]
console.log(firstItCompany)
const middleItCompany = itCompanies[3]
console.log(middleItCompany)
const lastItCompany = itCompanies[6]
console.log(lastItCompany)

console.log(itCompanies.toString())// print array to string Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon
 
const itCompaniesUppercase = itCompanies.map(itCompanies => itCompanies.toUpperCase().toString())
console.log(itCompaniesUppercase)
console.log(itCompaniesUppercase.length)
for(let i = 0; i < itCompaniesUppercase.length; i++){
    console.log(itCompaniesUppercase[i]);
}

console.log(itCompanies.join(' , '))

 const findIt = itCompanies.indexOf('Bass') 
    if(findIt != -1){
        console.log(itCompanies[findIt])
    }else{
        console.log('company is not found')
    }
 
itCompanies.sort()
console.log(itCompanies)

itCompanies.reverse()
console.log(itCompanies)

console.log(itCompanies.slice(0, 3))    
console.log(itCompanies.slice(4, 7))
console.log(itCompanies.slice(3, 4))
console.log(itCompanies.shift())
