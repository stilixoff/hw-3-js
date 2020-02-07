function getMaxDigit(number = 123456789) {
    return Math.max(...(String(number)));
}

console.log(getMaxDigit());

function powFunction (numberForPow, power) {
    let sumPow = numberForPow;
    for (let i = 1; i < power; i++) {
        numberForPow *= sumPow;
    }
    return numberForPow;
};

console.log (powFunction(5, 3));

function uppercase(word = 'oleH') {
    let n = word[0].toUpperCase();
    let z = word.slice(1, word.length).toLowerCase();
    return n+z;
}

console.log (uppercase());

function tax(cash, taxCash) {
    let sum = cash - (cash * (taxCash / 100));
    return sum;
}

console.log(tax(1000, 19.5));

function randomNumber(min = 10, max = 100){
    let x = Math.floor(min + Math.random() * (max + 1 - min));
    return x;
}

console.log(randomNumber());

