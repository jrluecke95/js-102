// Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string. To convert text to its leetspeak version, make the following substitutions:

// > A => 4
// > E => 3
// > G => 6
// > I => 1
// > O => 0
// > S => 5
// > T => 7

// ```js
// leetspeak('Leet');
// ```

// ```
// l337

function leetSpeak(string) {
    let newStr = '';
    for (let i = 0; i < string.length; i ++) {
        if (string[i] === 'a' || string[i] === 'A') {
            newStr += '4';
        } else if (string[i] === 'e' || string[i] === 'E') {
            newStr += '3';
        } else if (string[i] === 'g' || string[i] === 'G') {
            newStr += '6';
        } else if (string[i] === 'i' || string[i] === 'I') {
            newStr += '1';
        } else if (string[i] === 'o' || string[i] === 'O') {
            newStr += '0';
        } else if (string[i] === 's' || string[i] === 'S') {
            newStr += '5';
        } else if (string[i] === 't' || string[i] === 'IT') {
            newStr += '7';
        } else {
            newStr += string[i];
        }
    } return newStr;
}

console.log(leetSpeak('Leet'))