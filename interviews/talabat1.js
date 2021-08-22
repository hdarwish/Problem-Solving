let isvalid=function(input){
  let stack =[];
  for(let i=0;i<input.length;i++){
    if(input[i]==='('){
        stack.push('(')
    }else if(input[i]===')'){
      if(!stack.length){
        return false;
      }else{
        stack.pop();
      }
    }
  }
  return stack.length?false:true;
}
console.log(isvalid("(())((()())())"));