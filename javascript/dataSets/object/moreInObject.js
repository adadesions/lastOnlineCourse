/*
 ***********************************
 *    More Object in Javascript    *
 ***********************************
*/

const firstname = 'Ada';
const lastname = 'Kaminkure';

// Don't Do, Bad Way
const ada = {
  firstname: firstname,
  lastname: lastname,
  age: 24
}


// Good way and group it
const ada = {
  firstname,
  lastname,
  age: 24
}
