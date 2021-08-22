/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function (intervals) {
  if (intervals.length < 2) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  let s = intervals[0][0];
  let e = intervals[0][1];
  let result = [];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= e) {
      e = Math.max(e, intervals[i][1]);
    } else {
      result.push([s, e]);
      s = intervals[i][0];
      e = intervals[i][1];
    }
  }

  // add the last interval
  result.push([s, e]);

  return result;
};