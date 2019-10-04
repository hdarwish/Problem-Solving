function ExtraLongFactorial(n) {
  let sum = [1];
  // Length is half max length b/c we're multiplying
  const MAX_LENGTH = Math.floor(String(Number.MAX_SAFE_INTEGER).length / 2) - 1;
  const MAX_VALUE = Number(Array(MAX_LENGTH + 1).join("9"));
  for (let i = 2; i <= n; i++) {
    let carryover = 0;
    for (let j = 0; j < sum.length; j++) {
      let newValue = sum[j] * i + carryover;

      if (newValue > MAX_VALUE) {
        let newValueStr = String(newValue);
        carryover = Number(
          newValueStr.substr(0, newValueStr.length - MAX_LENGTH)
        );
        sum[j] = Number(newValueStr.substr(-MAX_LENGTH));
      } else {
        carryover = 0;
        sum[j] = newValue;
      }
    }
    if (carryover !== 0) sum.push(carryover);
  }
  // Don't left-pad the highest order group
  let highestGroup = sum.pop();
  // Left pad all other groups with '0'
  sum = sum.map(v => Array(MAX_LENGTH + 1 - String(v).length).join("0") + v);
  return highestGroup + sum.reverse().join("");
}
