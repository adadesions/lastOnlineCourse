/*
 ***********************************
 *          Function in JS         *
 ***********************************
*/

// Declaration of Function
function funcA() {};

// OR Anonymous function
const funcB = function b() {};

// OR Arrow function ( Lambda expression)
const funcC = () => {};

/*****************************************************************
 * First Class Function is...
 * Store fucntion in variable
******************************************************************/
// Example
const funcD = function d() {};


/*****************************************************************
 * Higher-Order Function is...
 * Function can return fucntion or receive function as parameters
******************************************************************/

// Example 1
const returnFunc = function r() {
  return () => 1+1;
};

// Example 2
const receiveFunc = function re(fnc) {
  return fnc();
};
console.log(`receiveFunc : ${receiveFunc(returnFunc())}`);


/*
 * Quiz
 * 1. Create function for return your name by recieve a name as parameter
 * 2. I wanna see f(g(x)) in programming let's make it happen!
*/
