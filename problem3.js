// ## Print a box

// Write function printBox which is given a width and height and prints a hollow box of those given dimensions.

// ```js
// printBox(6, 4);
// ```

// ```
// ******
// *    *
// *    *
// ******
// ```

function printBox(width, height) {
    for (let i = 0; i < height; i ++) {
        if (i === 0) {
            console.log('*'.repeat(width));
        } else if (i === height - 1) {
            console.log('*'.repeat(width));
        } else {
            console.log('*' + (' '.repeat(width-2) + '*'))
        }
    }
}

printBox(6, 4)