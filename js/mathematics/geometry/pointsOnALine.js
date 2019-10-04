const x = [0, 0, 1, 0, 0, 0];
const y = [1, 2, 3, 4, 5, 6];

x.every((v, i, self) => {
  return v === self[0];
}) ||
y.every((v, i, self) => {
  return v === self[0];
})
  ? console.log('YES')
  : console.log('NO');
