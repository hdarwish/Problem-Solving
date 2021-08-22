/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Approach #4 Using hashmap [Accepted]
Algorithm

The idea behind this approach is as follows: If the cumulative sum(repreesnted by sum[i]sum[i] for sum upto i^{th}i 
th index) upto two indices is the same, the sum of the elements lying in between those indices is zero. 
Extending the same thought further, if the cumulative sum upto two indices, say ii and jj is at a difference of kk i.e.
 if sum[i] - sum[j] = ksum[i]−sum[j]=k, the sum of elements lying between indices ii and jj is kk.

Based on these thoughts, we make use of a hashmap mapmap which is used to store the cumulative sum upto all the indices possible along with the number of times the same sum occurs. We store the data in the form: (sum_i, no. of occurences of sum_i)(sum 
i ,no.of occurences of sum i). We traverse over the array nums and keep on finding the cumulative sum.
 Every time we encounter a new sum, we make a new entry in the hashmap corresponding to that sum. 
 If the same sum occurs again, we increment the count corresponding to that sum in the hashmap. 
 Further, for every sum encountered, we also determine the number of times the sum sum−k has occured already, 
 since it will determine the number of times a subarray with sum k has occured upto the current index. 
 We increment the count by the same amount.

After the complete array has been traversed, the count gives the required result.

**Complexity Analysis**
Time complexity : O(n). The entire nums array is traversed only once.

Space complexity : O(n). Hashmap mapmap can contain upto n distinct entries in the worst case.


 */
var subarraySum = function(nums, k) {
    let sum=0,count=0;
    let map = new Map(); // sumTillNow,freq
    map.set(0,1);
    for(let i=0; i<nums.length;i++){
        sum+=nums[i];
        if(map.has(sum-k)){
            count+=map.get(sum-k);
        }
        map.set(sum,(map.get(sum)||0)+1);
    }
    return count;
    
};