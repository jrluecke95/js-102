// ## Sum the numbers

// Write a function sumNumbers which is given an array of numbers and returns the sum of the numbers.

// ```js
// sumNumbers([1, 4, 8]);
// ```

// ```
// 13
// ```

function sumNumbers(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

console.log(sumNumbers([1, 4, 8]))