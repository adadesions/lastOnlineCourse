/*
 ***********************************
 *             Filter              *
 ***********************************
*/

const data = [0,1,2,3,4,5,6,7,8,9];
const dividedBy2 = (data) => data.filter( x => x%2 == 0 )
const greaterThan5 = (data) => data.filter( x => x > 5 )
const powerBy2 = (data) => data.map( x => Math.pow(x,2));

console.log(dividedBy2(data));
console.log(powerBy2(greaterThan5(dividedBy2(data))));
