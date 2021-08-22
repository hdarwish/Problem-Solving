let twoMinSum=function(input){
  let firstMin=Number.MAX_SAFE_INTEGER,secondMin=Number.MAX_SAFE_INTEGER;
  for(let num of input){
    if(num<firstMin && num <secondMin){
      secondMin=firstMin;
      firstMin=num
      continue;
    }
    if(num<secondMin){
      secondMin=num;
    }
  }
  return firstMin+secondMin;
}
console.log(twoMinSum([10, 343445353, 3453445, 3453545353453]));