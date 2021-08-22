// var maxLengthBetweenEqualCharacters = function(s) {
//     let map = new Map();
//     let max=0;
//     for(let i=0;i<s.length;i++){
//       if(!map.has(s[i])){
//         map.set(s[i],i);
//       }
//       console.log(map)
//       max= Math.max(max,i-map.get(s[i])-1);
//     }
//     return map.size===s.length?-1:max;
// };
// console.log(maxLengthBetweenEqualCharacters(''));
class pair {
  constructor(first,second){
    this.first=first;
    this.second=second;
  }
}
var bestTeamScore = function(scores, ages) {
  let players=[];
  let n = scores.length;
  for (let i=0; i<n; i++) {
      players.push(new pair(ages[i], scores[i]));
  }
  players.sort((a,b)=>{
    if(a.first!==b.first){
      return b.first-a.first;
    }
    return b.second-a.second;
  })
  console.log(players);
  let ans = 0;
  let dp= new Array(n+1);
  dp[0] = 0;
  for (let i=0; i<n; i++) {
      let score = players[i].second;
      dp[i] = score;
      for (let j=0; j<i; j++) {
          if (players[j].second >= players[i].second) {
              dp[i] = Math.max(dp[i], dp[j] + score);
          }
      }
      ans = Math.max(ans, dp[i]);
  }
  return ans;
};
// console.log(bestTeamScore([4,5,6,5], [2,1,2,1]));
// let str = 'hafs'.split('');
// str.splice(0,1,'*');
// str.join('')
// console.log(str);
var findDuplicate = function(paths) {
  let map = new Map();
for(let path of paths){
  let values = path.split(' ');//root/a 1.txt(abcd) 2.txt(efgh)"
  for(let i=1;i<values.length;i++){
    let nameCont = values[i].split('(');
    let fileCont=nameCont[1].replace(')','');
    console.log(fileCont)
  }
}
};
findDuplicate(["root/a 1.txt(abcd) 2.txt(efgh)"])