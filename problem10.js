// Write a function positiveNumbers which is given an array of numbers and returns a new array containing only the positive numbers within the given array.

// ```js
// positiveNumbers([1, -3, 5, -3, 0]);
// ```

// ```
// [1, 5, 0]
// ```

// ```js
// positiveNumbers([1, 2, 3]);
// ```

// ```
// [1, 2, 3]
// ```

// ```js
// positiveNumbers([-1, -2, -3]);
// ```

// ```
// []
// ```

function positiveNumbers(array) {
    newArray = [];
    for (let i = 0; i < array.length; i ++) {
        if (array[i] > 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(positiveNumbers([-1, 2, 3, -4, 5]))