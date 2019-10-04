var string = 'F012345F06'; // just an example
console.log(string.replace('F0', '')); //replacefirst
console.log(string.replace(/F0+/gi, '')); //'123456'
