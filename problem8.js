// ## Long-long Vowels

// Write a function, which is given a string, return the result of extending any long vowels to the length of 5.

// ```js
// longLongVowels('Good');
// ```

// ```
// 'Goooood'
// ```

// ```js
// longLongVowels('Cheese');
// ```

// ```
// 'Cheeeeese'
// ```

// ```js
// longLongVowels('Man');
// ```

// ```
// 'Man'
// ```

function longVowels(string) {
    newStr = '';
    vowList = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < string.length; i++) {
        if (vowList.includes(string[i])) {
            if (string[i] === string[i + 1]) {
                newStr += string[i].repeat(5);
                i++;
            } else {
                newStr += string[i];
            }
        } else {
            newStr += string[i];
        }
    }
    return newStr;
}

console.log(longVowels('man'))