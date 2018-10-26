"use strict";

// NL
{
  console.log("NL methode")
let mystring = "Die eikel die Jeroen heet is geboren op 19-06-1975, en daarmee is hij nu 43 jaar (43 jaar teveel volgens velen, die wellicht gelijk hebben).";
let myregex = /\b(\d{1,2})-(\d{1,2})-(\d{4})\b/; // /-(\d+)/;


try{
let [_,d,m,y] = myregex.exec(mystring);
//let d = myregex.exec(mystring); let m = myregex.exec(mystring); let y = myregex.exec(mystring);
  console.log(`${d},${m},${y}`);
  let md = new Date(y, m - 1, d,17,45,20,50);
  console.log(md);
  //console.log(md.toJSON());
  console.log(md.valueOf());
} catch(e) {
  console.log("CATASTROPHE!!!\n\nTout est raté!")
} finally {
  console.log("Byebye!")
}
}


// US
{
  console.log("\n\nUS method")
let mystring = "That dork, called Jeroen, was born on 06/19/1975, and thus 43 years old (43 years too much according to some who may be right.).";
let myregex = /\b(\d{1,2})\/(\d{1,2})\/(\d{4})\b/; // /-(\d+)/;



try{
let [_,m,d,y] = myregex.exec(mystring);
//let d = myregex.exec(mystring); let m = myregex.exec(mystring); let y = myregex.exec(mystring);
  console.log(`${d},${m},${y}`);
  let md = new Date(y, m - 1, d,17,45,20,50);
  console.log(md);
  //console.log(md.toJSON());
  console.log(md.valueOf());
} catch(e) {
  console.log("CATASTROPHE!!!\n\nTout est raté!")
} finally {
  console.log("Byebye!")
}
// BEGIN: Sub: Theo
let ageex = /\b(\d+) years\b/i;
let [age,agel]=ageex.exec(mystring);
console.log("\n\n\n\n\n<theo>");
console.log("I am "+age+" old");
console.log(`Yeah I know that's ${agel} too much`);
console.log("</theo>");
//console.log(ageex.exec(mystring));
// END: Sub: Theo
} // end US
