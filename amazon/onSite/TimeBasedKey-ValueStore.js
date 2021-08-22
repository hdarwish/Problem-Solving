let TimeMap = function () {

  this.vMap = {};
  this.tMap = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (this.vMap[key] === undefined) {
    this.vMap[key] = [value];
    this.tMap[key] = [timestamp];
  } else {
    this.vMap[key].push(value);
    this.tMap[key].push(timestamp);
  }
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {

  if (this.vMap[key] === undefined) {
    return "";
  } else {
    let timeArray = this.tMap[key];
    let index = binarySearchInsertion(timeArray, timestamp);
    if (index >= 0) {
      return this.vMap[key][index];
    } else {
      index = -index - 1;
      if (index == this.tMap[key].length) {
        return this.vMap[key][index - 1];
      } else if (index == 0) {
        return "";
      } else {
        return this.vMap[key][index - 1];
      }
    }
  }
};

/**
 * Find the insert point if the target value is not found in the array
 * @param arr
 * @param target
 * @returns {number}
 */
// This is actually correct for looking for insertion point.
let binarySearchInsertion = function (arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let mid;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -(low + 1);
};

/**
 * Complexity Analysis

Time Complexity: O(1)O(1) for each set operation, and O(\log N)O(logN) for each get operation,
where NN is the number of entries in the TimeMap.

Space Complexity: O(N)O(N).
 *
 * Your TimeMap object will be instantiated and called as such:
 * let obj = Object.create(TimeMap).createNew()
 * obj.set(key,value,timestamp)
 * let param_2 = obj.get(key,timestamp)
 */