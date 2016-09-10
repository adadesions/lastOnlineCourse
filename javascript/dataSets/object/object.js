/*
 ***********************************
 *       Object in Javascript      *
 ***********************************
*/

// Object Creation
// Good way
const ada = {
  firstname: 'Ada',
  surname: 'Kaminkure',
  age: 24,
  location: 'Nakhon Ratchasima',
  getFullName() {
    return `My name is ${ada.firstname} ${ada.surname}`;
  },
  myAgeInTheYearOf(theYear) {
    const date = new Date();
    const currentYear = date.getFullYear();
    const differ = theYear - currentYear;

    if( differ < -ada.age){
      return `${ada.firstname} isn't born yet!`;
    }
    else {
      return ada.age + differ;
    }
  }
};


console.log(ada.getFullName());
console.log(ada.myAgeInTheYearOf(1991));
