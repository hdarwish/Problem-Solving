function canFinish(numCourses, prerequisites) {
  let matrix = new Array(numCourses).fill(0).map(x => new Array(numCourses).fill(0)); // i -> j
  let indegree = new Array(numCourses).fill(0);
  for (let i = 0; i < prerequisites.length; i++) {
    let ready = prerequisites[i][0];
    let pre = prerequisites[i][1];
    if (matrix[pre][ready] === 0)
      indegree[ready]++; //duplicate case
    matrix[pre][ready] = 1;
  }
  let count = 0;
  let queue = [];
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) queue.push(i);
  }
  while (queue.length) {
    let course = queue.shift();
    count++;
    for (let i = 0; i < numCourses; i++) {
      if (matrix[course][i] !== 0) {
        if (--indegree[i] === 0)
          queue.push(i);
      }
    }

  }
  return count == numCourses;

}
console.log(canFinish(2, [[1, 0], [0, 1]]));