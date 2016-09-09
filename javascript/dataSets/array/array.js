/*
 ***********************************
 *          Array in JS            *
 ***********************************
*/

// Array Creation
const myArray = [];

// Accessing an Array
const data = [1,2,3,4,5];
console.log(data[0]);

// Add more member in array
let nameList = ['ada', 'john'];
nameList.push('harry');

// Don't do
// X nameList[nameList.length] = 'Cobol';

console.log('Original version : '+nameList);

// Copy Array (Good way)
let copyName = [...nameList];
console.log('Copy version : '+copyName);
