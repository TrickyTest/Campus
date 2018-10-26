function swap(a, b) {
   var tmp = a;
   a = b;
   b = tmp; //assign tmp to b
 }

 var x = 1, y = 2;
 swap(x, y);

console.log("x is " + x + " y is " + y); // "x is 1 y is 2"
