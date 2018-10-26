"use strict";
const griek = require("./mymodule");
console.log(`Scripted by ${griek.__AUTHOR}`);
console.log(griek.__COPYRIGHT);
console.log(`${griek.__LICENSE} about the license!`)
console.log(typeof(griek));
//console.log(JSON.stringify(griek));
let h = griek.pythagoras(70,90);
console.log(`Hypothenusa:       ${h}`);
console.log(`
   ${griek.tweeofietsanders()}
   ${griek.tweeofietsanders(50)}

  `);


for (let k in griek){
  console.log(`${typeof griek[k]} ${k};`)
}



griek.Hello();
griek.Hello("Jeroen");
griek.Hello("Raymond");
