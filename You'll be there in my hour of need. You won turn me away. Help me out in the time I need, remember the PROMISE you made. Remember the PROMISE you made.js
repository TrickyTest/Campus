"use strict";
const yob=1975;
const ynw=2018;

// exp #1 -- IGNORE!!!
/*
let pa = new Promise(function(
  accept,
  reject
){
    if (yob<=ynw){
        accept(ynw,yob);
    } else {
      reject();
    }
  }
);

pa.then(function(aynw,ayob){
    console.log(`1: Age is now ${aynw-ayob}.`)    ;
},
function(){
  console.log("1: REJECT! ERROR! UH OH! HELP! DUMBASS! IDIOT!");
});
//*/

// exp #2
function myaccept(adone){  console.log(`2: Age is now ${adone}.`); }
// function myaccept(aynw,ayob) { console.log(`2: Age is now ${aynw-ayob}.`); }

}
function myreject(){
  console.log("2: REJECT! ERROR! UH OH! HELP! DUMBASS! IDIOT!");
}

function pa2(aynw,ayob){
  console.log(`2: Got: ${aynw},${ayob}!`)
  if (ayob<=aynw){
      return Promise.resolve(aynw-ayob);
    } else {
      return Promise.reject();
    }
  }
  //console.log(`pa2(${ynw},${yob}).then(<<myaccept>>,<<myreject>>);`);
  pa2(ynw,yob).then(myaccept,myreject);
