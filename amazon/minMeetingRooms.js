var minMeetingRooms = function (intervals) {
  let N = intervals.length;
  let starts = new Array(N);
  let ends = new Array(N);
  intervals.forEach((meeting, index) => {
    starts[index] = meeting[0];
    ends[index] = meeting[1];
  });
  starts.sort((a, b) => a - b);
  ends.sort((a, b) => a - b);
  let usedRooms = 0, startIndex = 0, endIndex = 0;
  while (startIndex < N) {
    if (starts[startIndex] >= ends[endIndex]) {
      usedRooms -= 1;
      endIndex++;
    }
    usedRooms += 1;
    startIndex++;
  }
  return usedRooms;
};
console.log(minMeetingRooms([[7, 10], [2, 4]]));