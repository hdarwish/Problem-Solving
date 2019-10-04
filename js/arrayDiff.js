const arrayDiff = (arr1, arr2) => {
    return arr1.filter(val => !arr2.includes(val));
}

console.log(arrayDiff([1,2,2,2,3,5],[2,3]));