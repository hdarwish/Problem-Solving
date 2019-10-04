
function solution(A) {
    let result =[];
    
    for(let i=0; i<A.length; ++i){
        if(A[i] >= 0){
            result[A[i]]=true;
        }
    }
    console.log(result);
    for(let j=1; j<=result.length; ++j){
        if(result[j] === undefined){
            return j;
        }
    }
    
    return 1;
    
}
console.log(solution([1, 3, 6, 4, 1, 2]));