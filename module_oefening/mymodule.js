module.exports = Object.freeze( {


  __AUTHOR : "Jeroen P. Broks",
  __COPYRIGHT : "(c) Jeroen P. Broks",
  __LICENSE: "Like I care",
  pythagoras : (a,b) => {
    if (!a || !b) {
      console.log("Hee! Lul! Geef me de volledige informatie");
      return;
    }
    let hypokwardraat = (a*a) + (b*b);
    let hyp =  Math.sqrt(hypokwardraat);
    console.log("Rechthoekzijde #1: "+a);
    console.log("Rechthoekzijde #2: "+b);
    return hyp;
  },

  tweeofietsanders: (a)=>{
    return a || 2;
  },


  Hello:(name="\x1b[31mmotherfucker, who was too lazy to enter a name!\x1b[0m") => { console.log(`Hello, ${name}!`);}

})
