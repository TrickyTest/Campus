"use strict";
const yob=2975;
const ynw=2018;


// this is the asynchronous, Promise returning function
// no validation for the current - birth > 2018 for now!!!
async function getAgeBasedOnCurrentAndBirthYearPromise(current, birth) {
  if (birth>current) throw "Fuck you! That's totally wrong, dude!";
  return current-birth;
}


// this is the synchronouse value (int) returning function
async function getAge(current, birth) {
  try{
  let promisedAge = getAgeBasedOnCurrentAndBirthYearPromise(current, birth);

  // prints Promise { 50} since IT IS A PROMISE
  console.log(promisedAge);
  console.log(`Remember the ${promisedAge} you made :P`)

  // now the value please
  let CockRobin = await getAgeBasedOnCurrentAndBirthYearPromise(current, birth);
  console.log(CockRobin);
} catch (e) {
     console.log(e); // vies, dat weet ik.
  } finally {
    console.log("Dit is het einde, dat doet de deur dicht!\nEr zijn geen woorden voor\nJa, dat is traaaaalalaaaaa lalalala\nJa dat is tralalalala!");
  }
   // => can you remove this now?
  /*
  promisedAge.then (
    ...,
    ...
  );
//*/
}

// should print 50
getAge(2018, 1968);

getAge(ynw,yob);
