"use strict";


function range(start,the_end,step){
  let s = step || 1;
  //if (s===undefined) { s=1; }
  //s = s || 1;
  let ret = [];
  for(let i=start;i<=the_end;i+=s) ret.push(i);
  return ret;
}


function sum( nums ){
  let ret=0;
  for (let i of nums) ret+=i;
  return ret;
}

function sum2( ...nums ){
  let ret = 0;
  for (let num of nums){
    switch(typeof num){
      case "number":
          ret += num;
          break;
      case "object":
          for(let n of num) ret+=sum2(n);
          break;
      }
  }
  return ret;
}

function sum3( ...nums){
  let ret=0;
  for (let i of nums) ret+=i;
  return ret;
}

// van stackoverflow.com
 /*
function printArguments( ... args ) {
  args.forEach((arg, index) => {
    console.log(`Argument ${index}:`, arg);
  });
}
// */ // ... geeft error.... Oude versie van javascript in node?

let my_range = range(1,10); console.log(my_range);
let my_sum = sum2(my_range); console.log(my_sum);

let my_result = "";
for (let i of my_range) {
  if (my_result!=="") my_result += " + ";
  my_result += `${i}`;
}
my_result += ` = ${my_sum}`;
console.log(my_result);

// Putting it to the test...
console.log(sum2([range(1,10),10,10,15,[3,5,10],range(100,200)],42,"Negeer mij",700,4000));

console.log(sum3(...my_range));
