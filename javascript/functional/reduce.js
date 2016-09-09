/*
 ***********************************
 *             Reduce              *
 ***********************************
*/

const data = [0,1,2,3,4,5,6,7,8,9];
const charData = ['a','d','a','c','o','d','e'];

// Reduce is to merge many data to one
const sum = (data) => data.reduce((x,sum) => x+sum);

console.log(sum(data));
