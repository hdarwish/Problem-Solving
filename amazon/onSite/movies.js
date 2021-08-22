
/**
 * 在Movie network 里寻找N 个分数最高的Movie
 * 给一个movie，每个movie 有id，rating 和一个list of neighbors
 * 你从这个movie 开始，找到similar 的top k rating movie，不包括这个movie
 *
 * Exp:
 * m0 <-­-­>m1, similarity 2
 * m0 <-­-­> m2, similarity 3
 * m1 <-­-­> m3, similarity 4
 * m2 <-­-­> m5, similaity 5
 * 如果要返回和mo 最相似的movie, 那么应该返回 m5 (只有有一条路径从 m1 到 m5, 并且 5 是最大的)
 * 如果返回3个就是m2, m3, m5
 *
 * Created by WinnieZhao on 9/28/2017.
 */
const top = 0;
const parent = i => ((i + 1) >>> 1) - 1;
const left = i => (i << 1) + 1;
const right = i => (i + 1) << 1;

class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }
  size() {
    return this._heap.length;
  }
  isEmpty() {
    return this.size() == 0;
  }
  peek() {
    return this._heap[top];
  }
  push(...values) {
    values.forEach(value => {
      this._heap.push(value);
      this._siftUp();
    });
    return this.size();
  }
  pop() {
    const poppedValue = this.peek();
    const bottom = this.size() - 1;
    if (bottom > top) {
      this._swap(top, bottom);
    }
    this._heap.pop();
    this._siftDown();
    return poppedValue;
  }
  replace(value) {
    const replacedValue = this.peek();
    this._heap[top] = value;
    this._siftDown();
    return replacedValue;
  }
  _greater(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }
  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }
  _siftUp() {
    let node = this.size() - 1;
    while (node > top && this._greater(node, parent(node))) {
      this._swap(node, parent(node));
      node = parent(node);
    }
  }
  _siftDown() {
    let node = top;
    while (
      (left(node) < this.size() && this._greater(left(node), node)) ||
      (right(node) < this.size() && this._greater(right(node), node))
    ) {
      let maxChild = (right(node) < this.size() && this._greater(right(node), left(node))) ? right(node) : left(node);
      this._swap(node, maxChild);
      node = maxChild;
    }
  }
}


class Movie {
  constructor(movieId, rating) {
    this.movieId = movieId;
    this.rating = rating;
    this.similarMovies = [];
  }

  getId() {
    return this.movieId;
  }

  getRating() {
    return this.rating;
  }

  addSimilarMovie(movie) {
    this.similarMovies.push(movie);
    movie.similarMovies.push(this);
  }

  getSimilarMovies() {
    return this.similarMovies;
  }


}
function getMovieRecommendations(movie, numSimilar) {
  let priorityQueue = new PriorityQueue((m1, m2) => (m1.getRating() - m2.getRating()));
  dfsSearchMovies(movie, priorityQueue);
  while (priorityQueue.size() > numSimilar) {
    priorityQueue.pop();
  }
  return priorityQueue._heap;
}
function dfsSearchMovies(movie, queue) {
  for (let m of movie.getSimilarMovies()) {
    if (!queue._heap.includes(m)) {
      queue.push(m);
      dfsSearchMovies(m, queue);
    }
  }
}

function main() {
  /**
   *              A(Rating 1.2)
   *               /   \
   *            B(2.4)  C(3.6)
   *              \     /
   *                D(4.8)
   */
  let a = new Movie(1, 1.2);
  let b = new Movie(2, 2.4);
  let c = new Movie(3, 3.6);
  let d = new Movie(4, 4.8);

  a.addSimilarMovie(b);
  a.addSimilarMovie(c);
  b.addSimilarMovie(d);
  c.addSimilarMovie(d);

  let case1 = getMovieRecommendations(a, 2);
  console.log(case1.includes(c));
  console.log(case1.includes(d));

  let case2 = getMovieRecommendations(a, 4);
  console.log(case2.includes(a));
  console.log(case2.includes(b));
  console.log(case2.includes(c));
  console.log(case2.includes(d));

  let case3 = getMovieRecommendations(a, 1);
  console.log(case3.includes(d));
}
main();
