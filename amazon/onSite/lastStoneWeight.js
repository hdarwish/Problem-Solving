/**
 * @param {number[]} stones
 * @return {number}
 */
// 排序时间复杂度是O(NlogN) 循环里二分查找+插入时间复杂度是O(N^2) (因为插入是O(N))
// 整体时间复杂度为O(NlogN)
var lastStoneWeight = function (stones) {
  // 按重量从小到大排列
  stones.sort((a, b) => a - b);
  while (stones.length > 1) {
    // 拿出最重的两块石头
    const delta = Math.abs(stones.pop() - stones.pop());
    // 二分法把处理过后的石头插入到序列中
    if (delta > 0) {
      let low = 0;
      let high = stones.length - 1;
      let index = stones.length;
      while (low <= high) {
        const mid = (low + high) >> 1;
        if (stones[mid] > delta) {
          index = Math.min(index, mid);
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      }
      // splice时间复杂度是O(N)
      stones.splice(index, 0, delta);
    }
  }
  return stones.length === 1 ? stones[0] : 0;
};


// implementation based on heap
// The overall time complexity is O (NlogN)
var lastStoneWeight = function (stones) {
  // heapify time complexity O (N)
  const heap = new Heap(stones);
  // It takes logN time to join the heap each time, so the loop time complexity is O (NlogN)
  while (heap.size > 1) {
    const stone1 = heap.dequeen();
    const stone2 = heap.dequeen();
    if (stone1 !== stone2) {
      heap.enqueen(stone1 - stone2);
    }
  }
  return heap.size ? heap.dequeen() : 0;
};

class Heap {
  constructor(list) {
    this._heap = list;
    for (let i = (list.length - 2) >> 1; i > -1; i--) {
      this.sideDown(i);
    }

  }
  get size() {
    return this._heap.length;
  }
  // Because the heap implements the abstract data structure of the priority queue, so dequeen is used
  dequeen() {
    const result = this._heap[0];
    this._heap[0] = this._heap[this._heap.length - 1];
    this._heap.length--;
    this.sideDown(0);

    return result;
  }

  sideDown(index) {
    while (2 * index + 1 < this._heap.length) {
      let child = 2 * index + 1;
      if (child + 1 < this._heap.length && this._heap[child + 1] > this._heap[child]) {
        child++;
      }
      if (this._heap[index] < this._heap[child]) {
        this.swap(index, child);
        index = child;
      } else {
        break;
      }
    }
  }
  // Because the heap implements the abstract data structure of the priority queue, so enqueen is used
  enqueen(val) {
    this._heap.push(val);
    this.sideUp(this._heap.length - 1);
  }

  swap(i, j) {
    const tmp = this._heap[i];
    this._heap[i] = this._heap[j];
    this._heap[j] = tmp;
  }

  sideUp(index) {
    while (index > 0) {
      const parent = (index - 1) >> 1;
      if (this._heap[parent] < this._heap[index]) {
        this.swap(parent, index);
        index = parent;
      } else {
        break;
      }
    }
  }

}