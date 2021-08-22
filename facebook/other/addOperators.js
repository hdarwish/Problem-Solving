
/*
The idea is to cut a value from the left of the string and then for each of operations '+', '-', '*' 
repeat the procedure recursively. The trick is to pass the sum of all left summands and the product of rightmost factors. 
This allows to calculate the left sum and the right product on the next step depending on the next chosen operation.
# Time complexity: O(3^n)
# Space complexity: O(3^n)
*/
let addOperators = function (num, target) {
  let result = [];
  let length = num.length;
  let dfs = function (path, sum, preValue, startIndex) {
    let i, curValue;

    // Traverse done
    if (startIndex === length) {
      if (sum === target) {
        result.push(path);
      }
      return;
    }

    // Try all possible combinations
    for (i = startIndex; i < length; i += 1) {
      if (i !== startIndex && num[startIndex] === '0') {
        break;
      }

      curValue = parseInt(num.substring(startIndex, i + 1), 10);

      if (startIndex === 0) {
        dfs(path + curValue, curValue, curValue, i + 1);
      } else {
        dfs(path + '+' + curValue, sum + curValue, curValue, i + 1);
        dfs(path + '-' + curValue, sum - curValue, -curValue, i + 1);
        dfs(path + '*' + curValue, sum - preValue + preValue * curValue, preValue * curValue, i + 1);
      }
    }
  };

  if (!num || length === 0) {
    return result;
  }

  dfs('', 0, 0, 0);

  return result;
};