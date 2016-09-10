/*
 ***********************************
 *    More Object in Javascript    *
 ***********************************
*/

const firstname = 'Ada';
const lastname = 'Kaminkure';

// Don't Do, Bad Way
const ada1 = {
  firstname: firstname,
  lastname: lastname,
  age: 24
}


// Good way and group it
const ada2 = {
  firstname,
  lastname,
  age: 24,
  code: 1234,
}

// Best
console.log(ada2.firstname);

// Good
let prop = 'firstname';
console.log(ada2[prop]);
