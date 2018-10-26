let items = []
let fields = ["FirstName","LastName","Hobby"];
let i=-1;
class titem{
   constructor(fn,ln,hobby){
     this.FirstName=fn;
     this.LastName=ln
     this.Hobby=hobby;
     items.push(this);
   }
}


new titem("Jeroen","Broks","Coding");
new titem("Donald","Trump","Fucking up the world");
new titem("Donald","Duck","Being mad!");
new titem("Mark","Rutte","De portomonee van multinationals spekken!");
new titem("Klootzak","Hufter","Iedereeen het bloed onder zijn nagels vandaan halen!")
new titem("Pistolen","Paultje","Iedereen doodschieten!")
new titem("Luna","Lovegood","Reading the Quibbler!")
new titem("Sauron","The Great Eye","Finding the one ring!")
new titem("Geert","Wilders","Moslims schofferen")
new titem("Beatrix","van Oranje-Nassau","Beeldhouwen")
new titem("Scyndi<p><img src='https://secure.gravatar.com/avatar/5fbccf235ea1f03b23de5cf0d1756af5?s=200&r=pg&d=https%3A%2F%2Fs.gjcdn.net%2Fimg%2Fno-avatar-3.png'>","Scorpio<p><img src='https://secure.gravatar.com/avatar/5fbccf235ea1f03b23de5cf0d1756af5?s=200&r=pg&d=https%3A%2F%2Fs.gjcdn.net%2Fimg%2Fno-avatar-3.png'>","Lots of things<p><img src='https://secure.gravatar.com/avatar/5fbccf235ea1f03b23de5cf0d1756af5?s=200&r=pg&d=https%3A%2F%2Fs.gjcdn.net%2Fimg%2Fno-avatar-3.png'>")
new titem("Thiery","Beaudet","Voor Jezus spelen")
new titem("Loki","van Asgard","Chaos en ellende veroorzaken")
new titem("Emmanuel","Marcon","Etre le president de la republique francaise")
new titem("Vader","Tijd",`Zeggen dat het vandaag ${Date()} is` );
new titem("Baby","Recurse","<iframe src='file:///home/jeroenb/code/CapGemini/gtd/actions/Oefeningen/event_callback/index.html' width=100% height=200>Kan hobby niet uitvoeren</iframe>")
new titem("David","DeCarmine","<iframe src='https://gamejolt.io' width=90% height=500> Error </iframe>");
new titem("Kitty","The Cat","Being cuuuute!")

const rand=Math.random;

let t; //=setTimeout("OhYeah();",1000);

let mt=0;
function OhYeah() {
  mt++;
  t=setTimeout(()=>{OhYeah();},1000);
  let e=  document.getElementById("t");
  //let d = `Timer updated ${mt}x`;
  let d = `${Math.floor(mt/60)} minutes; ${mt%60} seconds`;
  if (e) e.innerHTML=d; else console.log("time head is null");
}
//OhYeah();

function callback_button(){
  i++;
  if (i>=items.length) i=0
   for(let field of fields) {
     let element=document.getElementById(field);
     let item=items[i];
     element.innerHTML=item[field];
   }
   document.getElementById("kop").innerHTML=`Update #${i+1}`;
   let b = document.getElementById("butcell");
   let cr=Math.ceil(rand()*127)+127;
   let cg=Math.ceil(rand()*127)+127;
   let cb=Math.ceil(rand()*127)+127;
   console.log(`Button color is b(${cr},${cg},${cb})`);
   b.innerHTML = '<'+`input type="button" onclick="callback_button()" value="Update Me Now!" style="color: rgb(${cr},${cg},${cb}); background-color: rgb(${Math.floor(cr/0x10)},${Math.floor(cg/0x10)},${Math.floor(cb/0x10)});">`;
}
