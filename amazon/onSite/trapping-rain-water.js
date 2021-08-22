//Approach 1: Brute force
/*
Algorithm

Initialize ans=0 ans=0
Iterate the array from left to right:
Initialize max_left=0 and max_right=0
  Iterate from the current element to the beginning of array updating:
  max_left=max(max_left,height[j])
  Iterate from the current element to the end of array updating:
  max_right=max(max_right,height[j])
  Add min(max_left,max_right)−height[i] to ans

Complexity Analysis
Time complexity: O(n^2) For each element of array, we iterate the left and right parts.
Space complexity: O(1) extra space.
*/

//Approach 2: Dynamic Programming
/*
Algorithm
Find maximum height of bar from the left end upto an index i in the array left_max.
Find maximum height of bar from the right end upto an index i in the array right_max.
Iterate over height array and update ans:
  Add min(max_left[i],max_right[i])−height[i] to ans
  
  Complexity analysis
Time complexity: O(n).

We store the maximum heights upto a point using 2 iterations of O(n) each.
We finally update ans using the stored values in O(n).
Space complexity: O(n) extra space.
Additional O(n) space for left_max and right_max arrays than in Approach 1.
*/
function trap( height)
{
	if(height === null)
		return 0;
    let ans = 0;
    let size = height.length;
    let left_max=new Array(size).fill(0), right_max=new Array(size).fill(0);
    left_max[0] = height[0];
    for (let i = 1; i < size; i++) {
        left_max[i] = Math.max(height[i], left_max[i - 1]);
    }
    right_max[size - 1] = height[size - 1];
    for (let i = size - 2; i >= 0; i--) {
        right_max[i] = Math.max(height[i], right_max[i + 1]);
    }
    for (let i = 1; i < size - 1; i++) {
        ans += Math.min(left_max[i], right_max[i]) - height[i];
    }
    return ans;
}

//Approach 3: Using stacks
/*
Algorithm

Use stack to store the indices of the bars.
Iterate the array:
  While stack is not empty and height[current]>height[st.top()]
    It means that the stack element can be popped. Pop the top element as top.
    Find the distance between the current element and the element at top of stack, which is to be filled.
    distance=current−st.top()−1
    Find the bounded height bounded_height=min(height[current],height[st.top()])−height[top]
    Add resulting trapped water to answer ans+=distance×bounded_height
  Push current index to top of the stack
  Move current to the next position

  Complexity analysis

Time complexity: O(n).
Single iteration of O(n) in which each bar can be touched at most twice(due to insertion and deletion from stack)
 and insertion and deletion from stack takes O(1) time.
Space complexity: O(n). Stack can take upto O(n) space in case of stairs-like or flat structure.
*/
function trap2(height)
{
    let ans = 0, current = 0;
    let stack;
    while (current < height.length) {
        while (stack.length && height[current] > height[stack[stack.length-1]]) {
            let top = stack[stack.length-1];
            stack.pop();
            if (!stack.length)
                break;
            let distance = current - stack[stack.length-1] - 1;
            let bounded_height = Math.min(height[current], height[stack[stack.length-1]]) - height[top];
            ans += distance * bounded_height;
        }
        stack.push(current++);
    }
    return ans;
}

//Approach 4: Using 2 pointers
/*
Intuition

As in Approach 2, instead of computing the left and right parts seperately,
 we may think of some way to do it in one iteration. 
 From the figure in dynamic programming approach,
  notice that as long as right_max[i]>left_max[i] (from element 0 to 6), 
  the water trapped depends upon the left_max, and similar is the case when 
  left_max[i]>right_max[i] (from element 8 to 11). So, we can say that if there is a larger bar at one end (say right), 
  we are assured that the water trapped would be dependant on height of bar in current direction (from left to right).
   As soon as we find the bar at other end (right) is smaller, we start iterating in opposite direction (from right to left).
    We must maintain left_max and right_max during the iteration, but now we can do it in one iteration using 2 pointers, 
    switching between the two.

Algorithm

Initialize left pointer to 0 and right pointer to size-1
While left<right, do:
  If height[left] is smaller than height[right]
    If height[left]≥left_max, update left_max
    Else add left_max−height[left] to ans
    Add 1 to left.
  Else
    If height[right]≥right_max, update right_max
    Else add right_max−height[right] to ans
    Subtract 1 from right.

    Complexity analysis

Time complexity: O(n). Single iteration of O(n).
Space complexity: O(1) extra space. Only constant space required for left, right, left_max and right_max.
*/

var trap3 = function(height) {
  let left = 0, right = height.length - 1;
  let ans = 0;
  let left_max = 0, right_max = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      height[left] >= left_max ? (left_max = height[left]) : ans += (left_max - height[left]);
      ++left;
    }
    else {
      height[right] >= right_max ? (right_max = height[right]) : ans += (right_max - height[right]);
      --right;
    }
  }
  return ans;
};