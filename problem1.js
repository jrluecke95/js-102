// Write a function printNumbers which is given a start number and an end number. It will print the numbers from one to the other, one per line:

// ```js
// printNumbers(1, 10);
// ```

// ```
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// ```

function printNumbers1(num1, num2) {
    for (let i = num1; i <= num2; i++) {
        console.log(i);
    }
}

function printNumbers2(num1, num2) {
    let i = num1;
    while (i <= num2) {
        console.log(i)
        i++
    }
}

console.log(-21 % 26)