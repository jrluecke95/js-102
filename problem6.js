// ## Caesar Cipher

// Write a function cipher which is given a string, an offset, and returns the Caesar cipher of the string.

// ```js
// cipher('Genius without education is like silver in the mine', 13);
// ```

// ```
// 'Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar'
// ```

// ## Caesar Cipher 2

// Write a function decipher which is given a string, an offset, and returns the original message.

// ```js
// decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar', 13);
// ```

// ```
// 'Genius without education is like silver in the mine'

function cipher(string, shift) {
    cipherString = '';
    for (let i = 0; i < string.length; i++) {
        oldCharCode = string.charCodeAt(i);
        let newCharCode;
        if (oldCharCode >= 65 && oldCharCode <= 90) {
            newCharCode = ((oldCharCode - 65 + shift) % 26 + 65);
            cipherString += String.fromCharCode(newCharCode);
        } else if (oldCharCode >= 97 && oldCharCode <= 122) {
            newCharCode = ((oldCharCode - 97 + shift) % 26 + 97);
            cipherString += String.fromCharCode(newCharCode);
        } else {
            newCharCode = oldCharCode;
            cipherString += String.fromCharCode(newCharCode);
        }
    } return cipherString;
}

console.log(cipher('this is a string', 10))

function decipher(string, shift) {
    decipherString = '';
    shift = shift - 26;
    for (let i = 0; i < string.length; i++) {
        oldCharCode = string.charCodeAt(i);
        let newCharCode;
        if (oldCharCode >= 65 && oldCharCode <= 90) {
            newCharCode = (Math.abs(oldCharCode - 65 - shift) % 26 + 65);
            decipherString += String.fromCharCode(newCharCode);
        } else if (oldCharCode >= 97 && oldCharCode <= 122) {
            newCharCode = (Math.abs(oldCharCode - 97 - shift) % 26 + 97);
            decipherString += String.fromCharCode(newCharCode);
        } else {
            newCharCode = oldCharCode;
            decipherString += String.fromCharCode(newCharCode);
        }
    } return decipherString;
}