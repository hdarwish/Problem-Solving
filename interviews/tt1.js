const EMPTY = 'O';
const MINE = 'X';
let minesweeper = function(matrix){
  let rows=matrix.length;
  let cols=matrix[0].length;
  let ans= new Array(rows).fill(0).map(()=>new Array(cols).fill(0));
  let directions = [-1,0,1];
  //let visited = new Set();

  for(let row=0;row<rows;row++){
    for(let col=0;col<cols;col++){
      if(matrix[row][col]===EMPTY){
        let count=0;
        for(let i=0;i<3;i++){
          for(let j=0;j<3;j++){
            if(i===1 && j===1) continue;
            let r = row+directions[i];
            let c = col+directions[j];
            count+=getAdjacentInfo(r,c,matrix);
            }
          }
          ans[row][col]=count;
        } else{
          ans[row][col]=MINE;
        }
    }
  }
  //print
console.log(ans);
}
function getAdjacentInfo(x,y,matrix){
  if(x === -1 || x=== matrix.length || y === -1 || y===matrix[0].length ){
      return 0;
  }
  if(matrix[x][y] === MINE){
      return 1;
  }
  return 0;
}
let dfs = function(row,col,matrix,directions,visited){
  if(!visited.has([row,col].toString())){
    if(row<0 || col<0 || row >= matrix.length || col >= matrix[0].length || matrix[row][col]!==EMPTY) return;

    let minesCount=0;
    visited.add([row,col].toString());
    for(let i=0;i<3;i++){
      for(let j=0;j<3;j++){
        if(i===1 && j===1) continue;
        let r = row+directions[i];
        let c = col+directions[j];
        if(!visited.has([r,c].toString())){
          if(r>=0 && c>=0 && r < matrix.length && c < matrix[0].length && matrix[r][c]===MINE)  minesCount++
          dfs(r,c,matrix,directions,visited);  
        }
      }
    }
    matrix[row][col]=minesCount;
  }
}
 

minesweeper(["XOO", "OOO", "XXO"]);
/*For example:



X O O      X 1 0

O O O  ->  3 3 1

X X O      X X 1





The Moore neighborhood is defined by the eight cells surrounding the cell, the four directly next to it and four diagonal to it. 



The input is a an array of strings, with each element representing a row in the matrix.



Example:

minesweeper(["XOO", "OOO", "XXO"]) // should print



X 1 0

3 3 1

X X 1*/