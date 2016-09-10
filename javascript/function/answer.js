/*
 ***********************************
 *   Answers Quiz Function in JS   *
 ***********************************
*/


// 1. Create function for return your name by recieve a name as parameter
const returnMyName = (name) => name;

// 2. I wanna see f(g(x)) in programming let's make it happen!
const f = (x) => Math.pow(x,2); // x^2
const g = (x) => x+1;

console.log(f(g(2))); // 9
console.log(g(f(2))); // 5

// Real-life example
const prefixName = (gender) => {
  return gender ? 'Mr' : 'Miss';
}

const maleOrFemale = (gender) => {
  return gender === 'male'
}

console.log(prefixName(maleOrFemale('male'))); // Mr.
console.log(prefixName(maleOrFemale('female'))); // Miss
