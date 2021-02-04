// ## Print a Square

// Write a function printSquare which is given a size and prints a square of that size using asterisks.

// ```js
// printSquare(5);
// ```

// ```
// *****
// *****
// *****
// *****
// *****
// ```

function printSquare(size) {
    for (let i = 0; i < size; i++) {
        console.log('*'.repeat(size))
    }
}

printSquare(5)