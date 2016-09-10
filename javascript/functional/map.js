/*
 ***********************************
 *               Map               *
 ***********************************
*/
// Immutable State === Pure Function === Stateless Function
const data = [0,1,2,3,4,5,6,7,8,9];

// Use map as foreach
const showAll = (data) => data.map( x => x);
console.log(showAll(data));

// Use map modify each data but its value not change we call
// "Immutable state"
const add1 = (data) => data.map( x => x+1 );
const mul2 = (data) => data.map( x => x*2 );

// FP
console.log(add1(mul2(data)));
