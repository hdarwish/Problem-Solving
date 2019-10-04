//suing regex
console.log(('str1,str2,str3,str4'.match(/,/g) || []).length); //logs 3
//using split
console.log('str1,str2,str3,str4'.split('str').length - 1); //4
