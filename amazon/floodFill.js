function floodFill(image, sr, sc, newColor) {
  const color = image[sr][sc];
  if (color !== newColor) {
    dfs(sc, sr);
  }
  return image;

  function dfs(x, y) {
    const row = image[y];
    if (!row || row[x] !== color) {
      return;
    }
    row[x] = newColor;
    dfs(x - 1, y);
    dfs(x + 1, y);
    dfs(x, y - 1);
    dfs(x, y + 1);
  }
}