/**
 * @param {number} num
 * @return {string}
 */
function one(num) {
  switch (num) {
    case 1: return "One";
    case 2: return "Two";
    case 3: return "Three";
    case 4: return "Four";
    case 5: return "Five";
    case 6: return "Six";
    case 7: return "Seven";
    case 8: return "Eight";
    case 9: return "Nine";
  }
  return "";
}

function twoLessThan20(num) {
  switch (num) {
    case 10: return "Ten";
    case 11: return "Eleven";
    case 12: return "Twelve";
    case 13: return "Thirteen";
    case 14: return "Fourteen";
    case 15: return "Fifteen";
    case 16: return "Sixteen";
    case 17: return "Seventeen";
    case 18: return "Eighteen";
    case 19: return "Nineteen";
  }
  return "";
}

function ten(num) {
  switch (num) {
    case 2: return "Twenty";
    case 3: return "Thirty";
    case 4: return "Forty";
    case 5: return "Fifty";
    case 6: return "Sixty";
    case 7: return "Seventy";
    case 8: return "Eighty";
    case 9: return "Ninety";
  }
  return "";
}

function two(num) {
  if (num === 0)
    return "";
  else if (num < 10)
    return one(num);
  else if (num < 20)
    return twoLessThan20(num);
  else {
    let tenner = parseInt(num / 10);
    let rest = num - tenner * 10;
    if (rest != 0)
      return ten(tenner) + " " + one(rest);
    else
      return ten(tenner);
  }
}

function three(num) {
  let hundred = parseInt(num / 100);
  let rest = num - hundred * 100;
  let res = "";
  if (hundred * rest !== 0)
    res = one(hundred) + " Hundred " + two(rest);
  else if ((hundred === 0) && (rest !== 0))
    res = two(rest);
  else if ((hundred !== 0) && (rest === 0))
    res = one(hundred) + " Hundred";
  return res;
}


var numberToWords = function (num) {
  if (num === 0)
    return "Zero";
  let billion = parseInt(parseInt((num / 1e9) * 1e3) / 1e3);
  let million = parseInt(parseInt((num - billion * 1e9) / 1e6 * 1e3) / 1e3);
  let thousand = parseInt(parseInt((num - billion * 1e9 - million * 1e6) / 1e3 * 1e3) / 1e3);
  let rest = num - billion * 1e9 - million * 1e6 - thousand * 1e3;

  let result = "";
  if (billion != 0)
    result = three(billion) + " Billion";
  if (million != 0) {
    if (result.length)
      result += " ";
    result += three(million) + " Million";
  }
  if (thousand != 0) {
    if (result.length)
      result += " ";
    result += three(thousand) + " Thousand";
  }
  if (rest != 0) {
    if (result.length)
      result += " ";
    result += three(rest);
  }
  return result;
};
console.log(numberToWords(1234567891));