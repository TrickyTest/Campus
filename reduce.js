const alles ={
  optellen : { a : [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
                   f : (a,b) => a+b,
                   s : 0
                 },
  aftrekken : { a : [1,2,3,4],
                  f : (a,b) => a-b,
                  s : 100},
  vermenigvuldigen : {a : [1,2,3,4], f:(a,b)=>a*b,s:1},
  concateneren : { a : ["Jeroen","is","een","arrogante","hondelul!"],
                       f : (a,b) => {
                         let ret = a;
                         if (ret!="") ret += " ";
                         ret += b;
                         return ret;
                       },
                       s : ""
                  },
  machtsverheffen : { a :[2,3,4],
                    f :(v,p)=>{
                      let ret = v;
                      for (let i=0;i<p;i++) ret = ret * ret;
                      return ret;
                    },
                    s : 2
  },
  elemententellen : { a:[1,2,3,4,5,6,7,8,9,0],
                    s:0,
                    f:(a,b)=> a+1
  },
  onzin : { a:[1,2,3,4,5,6,7,9,0],s:0,f:(a,b)=>"Wat je hier ook invult, ik doe er lekker toch niets mee! :P"},
  reversedconcat : { a:["a","b","c","d"],f:(a,b)=>b+a,s:""},
  countchars : {
    a:  ["Jeroen","is","een","arrogante","hondelul!"],
    s: 0,
    f:(v1,v2) => v1+v2.length
   },
   countchars_per_element : {
    a:["Jeroen","is","een","arrogante","hondelul!"],
    s:[],
    f:(rarray,value) => {
      rarray.push(value.length);
      return rarray } // pointer issue...
  },
  plusodd_mineven:{
    a:[1,2,3,4,5,6,7,8,9],
    s:0,
    f:(a,b)=>{
      if (b%2===0) return a-b; else return a+b;
    }
  },
  puinhoop_iedere_keer_anders:{a:[Math.floor((Math.random()*10)+1),Math.floor((Math.random()*10)+1),Math.floor((Math.random()*100)+1),Math.floor((Math.random()*10)+1),Math.floor((Math.random()*10)+1),
    Math.floor((Math.random()*10)+1),Math.floor((Math.random()*10)+1)],
    f:(a,b) => a+b,
    s:Math.floor((Math.random()*10)+1)
  }
 }

function myREDUCE(a,f,s){
  let ret=s;
  for (v of a) ret=f(ret,v);
  return ret;
}


 for ( k in alles){
   v = alles[k];
   console.log(`Official: ${k} returns >> ${v.a.reduce(v.f,v.s)}`);
   if (k==="countchars_per_element") v.s=[]; // pointer reset :P
   console.log(`myREDUCE: ${k} returns >> ${myREDUCE(v.a,v.f,v.s)}`);
 }



/* Go variant
for k,v:=range myarray {
  mijncode(k,v);
}

// ook mogelijk in JavaScript?
*/
