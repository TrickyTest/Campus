let klaar=false;
const finishHomework=(pos,...nextsubjects)=>{
  console.log("\033[32mHomework done for "+nextsubjects[pos-1]+"\033[0m");
  doHomework(pos,...nextsubjects);
}


const doHomework=(pos,...nextsubjects)=>{
     if (pos>=nextsubjects.length) {
       console.log("All done!");
       klaar=true;
       return;
     }
     let sec=Math.ceil(Math.random()*30)
     console.log("\033[31m"+`Doing my homework for ${nextsubjects[pos]} which is gonna take me ${sec} seconds, I think!`+"\033[0m");
     setTimeout(finishHomework,sec*1000,pos+1,...nextsubjects);
}

doHomework(0,"Dutch","Economy","English","Geography","Social Studies","Mathematics","French","Physics","History","German","Biology","Lessons by Raymond");
const ZeitInterval=5;

function Zeit(dieZeit){
  let ret = "\033[33m";
  if (dieZeit>=60) ret+=`${Math.floor(dieZeit/60)} minutes and `;
  ret += `${dieZeit%60} seconds passed!`;
  ret += "\033[0m";
  console.log(ret);
  if (klaar) {
    console.log("Well, and there it ends! :P");
    return;
  }
  setTimeout(Zeit,ZeitInterval*1000,dieZeit+ZeitInterval)
}
setTimeout(Zeit,ZeitInterval*1000,ZeitInterval)
