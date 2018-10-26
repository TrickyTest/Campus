"use strict"


let alert=console.log;

//return text that will reference variable by name (by capturing that variable to closure)
function byRef(varName){
    return "({get value(){return "+varName+";}, set value(v){"+varName+"=v;}})";
}

//demo

//assign argument by reference
function modifyArgument(argRef, multiplier){
    argRef.value = argRef.value * multiplier;
}

(function(){

var x = 10;

alert("x before: " + x);
modifyArgument(eval(byRef("x")), 42);
alert("x after: " + x);

})()
