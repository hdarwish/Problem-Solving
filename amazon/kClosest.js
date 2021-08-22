
let kClosest = function (points, K) {
  //Sort
  const N = points.length;
  const dists = new Array(N);
  for (let i = 0; i < N; ++i)
    dists[i] = dist(points[i]);

  dists.sort((a, b) => a - b);
  const distK = dists[K - 1];
  let ans = Array(K).fill(0).map(x => Array(2).fill(0))
  let t = 0;
  for (let i = 0; i < N; ++i)
    if (dist(points[i]) <= distK)
      ans[t++] = points[i];
  return ans;

  // Divide and Conquer
  // function sort(i, j, K) {
  //   if (i >= j) return;
  //   let k = Math.floor(Math.random() * (j - i)) + i;
  //   swap(i, k, points);
  //   let mid = partition(i, j);
  //   let leftLength = mid - i + 1;
  //   if (K < leftLength)
  //     sort(i, mid - 1, K);
  //   else if (K > leftLength)
  //     sort(mid + 1, j, K - leftLength);
  // }
  // function swap(i, j) {
  //   let t0 = points[i][0], t1 = points[i][1];
  //   points[i][0] = points[j][0];
  //   points[i][1] = points[j][1];
  //   points[j][0] = t0;
  //   points[j][1] = t1;
  // }
  // function partition(i, j) {
  //   let oi = i;
  //   let pivot = dist(i);
  //   i++;

  //   while (true) {
  //     while (i < j && dist(i) < pivot)
  //       i++;
  //     while (i <= j && dist(j) > pivot)
  //       j--;
  //     if (i >= j) break;
  //     swap(i, j);
  //   }
  //   swap(oi, j);
  //   return j;
  // }
  // function dist(i) {
  //   return points[i][0] * points[i][0] + points[i][1] * points[i][1];
  // }
  // sort(0, points.length - 1, K);
  // return points.slice(0, K);
}



// with sort
function dist(point) {
  return point[0] * point[0] + point[1] * point[1];
}

console.log(kClosest([[3, 3], [5, -1], [-2, 4]], 2));
