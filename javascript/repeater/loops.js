/*
 ***********************************
 *       Loops in Javascript       *
 ***********************************
*/

// 1. For loop
for(let i = 0; i < 10; i++){
  console.log(`Hello from For loop ${i} times`);
}

// 2. while loop
{
  let i = 0
  while( i < 10 ){
    console.log(`Hello from While loop ${i} times`);
    i++;
  }
}


// 3. Do-While
{
  let i = 0;
  do{
    console.log(`Hello from Do-While loop ${i} times`);
    i++;
  }while(i < 10)
}

//
// Don't use For-in and For-of
//
