let possibleBalance = function(S,T){
  let balance =0;
  let stack = [];
  for(let ch of S){
    if(ch==='+'){
      balance+=1;
    }else{
      balance-=1;
    }
    stack.push(ch);
  }
  if(balance>=T) return 0;
  let count=0;
  while(stack.length){
    let currCh = stack.pop();
    if(currCh==='+'){
      balance-=1;
    }else{
      balance+=1;
    }
    count++;
    if(balance>=T) return count;
  }
  return -1;
}

console.log(possibleBalance("+++-++-++--+-++++-+--++-++-+-++++-+++--", 12)); // 1

console.log(possibleBalance("+++-++-++--+-++++-+--++-++-+-++++-+++--", 13)) // 2

console.log(possibleBalance("+++-++-++--+-++++-+--++-++-+-++++-+++--", 14)) // -1

console.log(possibleBalance("+++---", 3)) // 3

console.log(possibleBalance("+++-+---", 3)) // 3

console.log(possibleBalance("----+-", -2)) // 4