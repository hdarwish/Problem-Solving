/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function (read4) {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Number of characters to read
   * @return {number} The number of actual characters read
   */
  let buffPtr = 0;
  let buffCnt = 0;
  let buff = new Array(4).fill('');
  return function (buf, n) {
    let ptr = 0;
    while (ptr < n) {
      if (buffPtr === 0) {
        buffCnt = read4(buff)
      }
      if (buffCnt === 0) break;
      while (ptr < n && buffPtr < buffCnt) {
        buf[ptr++] = buff[buffPtr++];
      }
      if (buffPtr >= buffCnt) buffPtr = 0;
    }
    return ptr;
  };
};

//I used buffer pointer(buffPtr) and buffer Counter(buffCnt) to store the data received in previous calls.
//In the while loop, if buffPtr reaches current buffCnt, it will be set as zero to be ready to read new data."