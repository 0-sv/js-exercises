const removeFromArray = function(arr, ...rest) {
    if (arr.length === 1) return (arr[0] === rest[0] ? [] : arr);
    else return removeFromArray(arr.slice(0, arr.length/2), rest[0])
        .concat(removeFromArray(arr.slice(arr.length/2, arr.length), rest[0]));
}

console.log(removeFromArray([1, 2, 3, 4], 3))
module.exports = removeFromArray
