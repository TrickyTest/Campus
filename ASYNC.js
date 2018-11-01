"use strict";
const yob=1975;
const ynw=2018;


// this is the asynchronous, Promise returning function
// no validation for the current - birth > 2018 for now!!!
async function getAgeBasedOnCurrentAndBirthYearPromise(current, birth) {
  return current-birth;
}


// this is the synchronouse value (int) returning function
async function getAge(current, birth) {
  let promisedAge = getAgeBasedOnCurrentAndBirthYearPromise(current, birth);

  // prints Promise { 50} since IT IS A PROMISE
  console.log(promisedAge);
  console.log(`Remember the ${promisedAge} you made :P`)

  // now the value please
  let CockRobin = await getAgeBasedOnCurrentAndBirthYearPromise(current, birth);
  console.log(CockRobin);

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
