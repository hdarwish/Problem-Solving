function migratoryBirds(arr) {
  const frequencies = new Map();
  arr.forEach(val => {
    if (frequencies.has(val)) {
      frequencies.set(val, frequencies.get(val) + 1);
    } else {
      frequencies.set(val, 1);
    }
  });
  const sortedByVal = new Map([...frequencies.entries()].sort((a, b) => {
    if (a[1] !== b[1]) {
      return b[1] - a[1];
    } else {
      return a[0] - b[0];
    }
  }));
  return [...sortedByVal.keys()][0];

}