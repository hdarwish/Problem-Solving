let findOrder = function (numCourses, prerequisites) {
  if (numCourses < 0) {
    return [];
  }

  var matrix = [],
    indegree = [],
    len = prerequisites.length;

  for (var i = 0; i < numCourses; i++) {
    matrix[i] = [];
    indegree[i] = 0;
  }

  for (var i = 0; i < len; i++) {
    var item = prerequisites[i];
    var ready = item[0],
      pre = item[1];

    if (!matrix[pre][ready]) {
      indegree[ready]++;
    }

    matrix[pre][ready] = 1;
  }

  var count = 0;
  var queue = [],
    result = [];

  for (var i = 0, len = indegree.length; i < len; i++) {
    if (indegree[i] == 0) {
      queue.push(i);
    }
  }

  // 这里进来是没有依赖的课程
  while (queue.length) {
    var course = queue.shift();

    result.push(course);
    count++;

    for (var i = 0; i < numCourses; i++) {
      // 开始装载依赖于course的一些课程
      if (matrix[course][i] == 1) {
        if (--indegree[i] == 0) {
          queue.push(i);
        }
      }
    }

  }

  return count == numCourses ? result : [];
};


console.log(findOrder(2, [[1, 0]]))
// console.log(findOrder(2, [[1, 0], [0, 1]]))
// console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]))