function findRepeated(array) {
  //array n of length n+1
  //time  O(n)
  let arr = new Array(array.length - 1).fill(false);
  for (let i = 0; i < array.length; i++) {
    if (arr[array[i] - 1] == true) {
      return array[i];
    }
    arr[array[i] - 1] = true;
  }
  return -1;
}
console.log(findRepeated([1, 2, 5, 3, 1]));
let testcase1 = [1, 2, 5, 3, 1];
describe(() => {
  test("correct input that returns", () => {
    findRepeated();
  });
});
