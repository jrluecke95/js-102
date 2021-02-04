// ### Print a Banner

// Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.

// ```js
// printBanner('Welcome to DigitalCrafts');
// ```

// ```
// ****************************
// * Welcome to DigitalCrafts *
// ****************************
// ```

function printBanner(string) {
    const strLength = string.length + 4;
    console.log('*'.repeat(strLength));
    console.log(`* ${string} *`);
    console.log('*'.repeat(strLength));
}

printBanner('Welcome to DigitalCrats');