/**
 * @param {number[]} A
 * @return {number}
 */
// Similar to the longest growing subsequence
// time complexity O(n^2)
var longestArithSeqLength = function(A) {
    let result = 0;
    const dp = new Array(A.length);
    dp[0] = {};
    for(let i=1;i<A.length;i++){
        dp[i] = {};
        for(let j=0;j<i;j++){
            const delta = A[i]-A[j];
            const length = (dp[j][delta] || 1)+1;
            // dp[i][delta]The length of the difference sequence with a tolerance of delta ending with the i-th node
            dp[i][delta] = length;
            console.log(dp)
            result = Math.max(result,length);
        }
    }
    return result;
};
console.log(longestArithSeqLength([3,6,9,12]));