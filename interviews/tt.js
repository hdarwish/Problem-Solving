let getChange = function(M,P){
  let map = [1,5,10,25,50,100];
  let MC = M*100;
  let PC = P*100;
  let remainder=MC-PC;
  let ans = new Array(map.length).fill(0);
  if(remainder<=0)return ans;
  let currMapIdx=map.length-1;
  while(remainder>0){
    ans[currMapIdx]=parseInt(remainder/map[currMapIdx]);
    remainder=remainder%map[currMapIdx];
    currMapIdx--;
  }
  return ans;
}
/*getChange(3.14, 1.99) // should return [0,1,1,0,0,1]

getChange(3, 0.01) // should return [4,0,2,1,1,2]

getChange(4, 3.14) // should return [1,0,1,1,1,0]

getChange(0.45, 0.34) // should return [1,0,1,0,0,0]*/
console.log(getChange(3.14, 1.99)); // should return [1,0,0,0,0,4]
console.log(getChange(3, 0.01) ); 
console.log(getChange(4, 3.14)); 
console.log(getChange(0.45, 0.34)); 