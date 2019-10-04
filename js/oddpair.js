function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    
    var agg = 0;
    
    for(var i=0; i<A.length; i++) {
        agg ^= A[i];
        console.log(agg);
    }
    
    return agg;
}
console.log(solution([9,3,9,3,9,7,9]));