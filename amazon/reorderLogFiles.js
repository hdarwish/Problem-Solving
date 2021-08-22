
function reorderLogFiles(logs) {
  // logs.sort((log1, log2) => {
  //   const split1 = log1.split(' ');
  //   const split2 = log2.split(' ');
  //   let ai = log1.indexOf(' ');
  //   let bi = log2.indexOf(' ');
  //   const isDigit1 = split1[1][0] >= '0' && split1[1][0] <= '9';
  //   const isDigit2 = split2[1][0] >= '0' && split2[1][0] <= '9';
  //   if (!isDigit1 && !isDigit2) {
  //     let cmp = log1.substring(ai + 1).localeCompare(log2.substring(bi + 1));
  //     if (cmp !== 0) return cmp;
  //     return split1[0].localeCompare(split2[0]);
  //   }
  //   return isDigit1 ? (isDigit2 ? 0 : 1) : -1;
  // });
  // return logs;

  let digit = [];
  let letter = [];
  for (let log of logs) {
    if (log[log.length - 1].match(/[0-9]/g)) digit.push(log);
    else letter.push(log);
  }
  letter.sort((a, b) => {
    let ai = a.indexOf(' ');
    let bi = b.indexOf(' ');
    let lc = a.substring(ai + 1).localeCompare(b.substring(bi + 1));
    console.log('lc', lc, a.substring(ai + 1), b.substring(bi + 1))
    if (lc != 0) return lc
    console.log('a.substring(0, ai), b.substring(0, bi)', a.substring(0, ai), b.substring(0, bi))
    return a.substring(0, ai).localeCompare(b.substring(0, bi));
  });
  return [...letter, ...digit];
}
console.log(reorderLogFiles(["a1 9 2 3 1", "g1 act car", "zo4 4 7", "ab1 off key dog", "a8 act zoo"]));
