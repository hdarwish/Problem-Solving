const fastestApproach = inputArray => {
  let frontTotal = 1;
  let backTotal = 1;
  let frontCache = [1];
  let backCache = [];
  let lastKey = inputArray.length - 1;
  backCache[lastKey] = 1;
  inputArray.forEach((item, index) => {
    if (index !== lastKey) {
      frontTotal = item * frontTotal;
      frontCache[index + 1] = frontTotal;
      let reverseKey = lastKey - index;
      backTotal = inputArray[reverseKey] * backTotal;
      backCache[reverseKey - 1] = backTotal;
    }
  });

  return inputArray.map((item, index) => {
    return frontCache[index] * backCache[index];
  });
};
console.log(fastestApproach([2, 2, 3, 4, 5]));
