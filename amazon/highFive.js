var highFive = function (items) {
  var result = [];
  var id = 1;
  var sumOfScores = 0;
  var minScore = 100;
  var biggestId = 1;

  for (i = 0; i < items.length; i++) {
    if (items[i][0] > biggestId) biggestId = items[i][0];
  }

  while (id <= biggestId) {
    var scores = [];
    for (j = 0; j < items.length; j++) {
      if (items[j][0] === id) {
        if (scores.length < 5) {
          scores.push(items[j][1]);
          if (items[j][1] < minScore) {
            minScore = items[j][1];
          }
        } else {
          if (items[j][1] > minScore) {
            scores.push(items[j][1]);
            scores.sort(function (a, b) {
              return a - b;
            });
            scores.shift();
            minScore = scores[0];
          }
        }
      }
    }

    for (var c of scores) {
      sumOfScores += c;
    }

    result.push([id, Math.floor(sumOfScores / 5)]);
    id++;
    sumOfScores = 0;
    minScore = 100;
  }
  return result;
};