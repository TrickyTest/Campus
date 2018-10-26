"use strict";
let my_regex = /\b[1-9][0-9]{3}\ {0,1}[A-Z]{2}\b/; // \<space> and not \s as tabs should be false as well!
let postcodes = ["0000 AB",
                "Sicko!",
                "1256 AAB", // Waarom keurt hij dit goed???
                "4876 EH",
                "4816 GM",
                "1000AB",
                "9999AB",
                "1000ab",
                "1234\tXY", // moet false zijn!
                "1234 XY", // moet true zijn!
                "1234   XY", // moet false zijn!
                "1234XY", // moet true zijn!
                "===================================================="
];
for (let i=0;i<120;i++){
  postcodes.push(`${Math.floor(Math.random()*4000)} ${String.fromCharCode((Math.random()*30)+60)}${String.fromCharCode((Math.random()*30)+60)}`);
}

for(let pc of postcodes){
  let res = my_regex.test(pc);
  let resn = { "true": "Correct!", "false": "Nee, da's niet goed!!!"}
  let o= `${pc}\t=> ${resn[res]}`;
  let aba = { "true":String.fromCharCode(27)+"[32m", "false":String.fromCharCode(27)+"[31m"}; // To replace the dirty code below :P
  let ae=String.fromCharCode(27)+"[0m";
  console.log(`\t${aba[res]}${o}${ae}`);
}






// dirty code straight from HELL!!! I'd normally use a different approach :P
/*
let ab="";
if (res){
ab=String.fromCharCode(27)+"[32m";
} else {
ab=String.fromCharCode(27)+"[31m";
}
console.log(`${ab}${o}${ae}`);
// End dirty code straight from HELL! */
