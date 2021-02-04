// ## Factor a Number

// Write a function factors which is given a number and returns an array containing all its factors. What are factors? https://www.khanacademy.org/math/pre-algebra/factors-multiples/divisibility-and-factors/v/finding-factors-of-a-number

function factors(num) {
    let factorList = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factorList.push(i);
        }
    }
    return factorList;
}

console.log(factors(120));