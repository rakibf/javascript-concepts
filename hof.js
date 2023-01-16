

function map(arr, fn) {
    let returnArray = [];
    for (let i = 0; i < arr.length; i++) {
        returnArray.push(fn(arr[i]));
    }
    return returnArray;
}

const result = map([2, 3, 5], function(number) {
    return number * 5;
});

console.log(result);