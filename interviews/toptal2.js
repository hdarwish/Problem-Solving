
function findWord(input){
  let map = new Map(); 
  let seenVals= new Set();
  for(let s of input){
    let id = s.split('>');
    let first = id[0];
    let second = id[1];
    map.set(first,second);
    seenVals.add(second);
  }
  let start;
  for(let [key,] of map.entries()){
    if(!seenVals.has(key)){
      start=key;
      break;
    }
  }
  let ans=[start];
  while(map.has(start)){
    let val = map.get(start);
    ans.push(val);
    start=val;
  }
  return ans.join('');
}
console.log(findWord(["P>E","E>R","R>U"])) // PERU

console.log(findWord(["I>N","A>I","P>A","S>P"])) // SPAIN
console.log(findWord(["U>N", "G>A", "R>Y", "H>U", "N>G", "A>R"])) // HUNGARY

console.log(findWord(["I>F", "W>I", "S>W", "F>T"])) // SWIFT

console.log(findWord(["R>T", "A>L", "P>O", "O>R", "G>A", "T>U", "U>G"])) // PORTUGAL

console.log(findWord(["W>I", "R>L", "T>Z", "Z>E", "S>W", "E>R", "L>A", "A>N", "N>D", "I>T"])) // SWITZERLAND