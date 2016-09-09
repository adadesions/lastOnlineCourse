/*
 ***********************************
 *     Stop Using a Var Keyword    *
 ***********************************
*/

// In New version of JavaScript we use
// const and let are block-scope

// Don't allow to reassign we use 'const'
const a = 23;

// Must reassign use 'let'
let i = 0;

// Bad example
for(var k = 0; k<10; k++){};
console.log(`k = ${k}`);

// Good Example
for(let m = 0; m<10; m++){};
// console.log(`m = ${m}`);
