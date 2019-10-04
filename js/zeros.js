// function zeros (n) {
//     let total = 1, count=0;
    
//     for(let i = 1; i <= n; i++) {
//         total *= i;
//       while(total % 10 === 0){
//         total/=10;
//         count++;
        
//       }
//     }
     
//     return count;
//   }
var palindromeChainLength = function(n) {
    var numberstr = n.toString();
    var count =0;
    while(!isPalindrome(numberstr)){
      count++;
      var revnumberstr = numberstr.split('').reverse().join('');
      numberstr = (parseInt(numberstr) + parseInt(revnumberstr)).toString();
    }
    return count;
    
  };
  
  function isPalindrome(str) {
    const revString = str.split('').reverse().join('');
  
    return revString === str;
  };
  console.log(palindromeChainLength(87));