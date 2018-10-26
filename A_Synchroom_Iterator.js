function* Laufen(Start,Schritt,Ziel){
  for(let P = Start; P<=Ziel; P+=Schritt) yield P;
}

/* Lua variant

function Laufen(Start,Schritt,Ziel)
  local P=Start
  return function()
      local r=P;
      P = P + 1
      if P>Ziel then return nil end
      return ret
   end
end
for i in Laufen(0,5,100) do print(i) end

*/


for(let i of Laufen(0,5,100)){
  console.log(i);
}



function* LetterVoorLetter(MijnString){
  for (let i=0; i<MijnString.length;i++) yield MijnString.slice(i,i+1);
}

for (l of LetterVoorLetter("JB Kukelhaan! Wat heb je nou toch weer gedaan")) console.log(l);
