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

function countLetter(word = "Асталависта", letter = "а") {
    let arrWord = word.toLowerCase().split('');
    let SumLetter = 0;
    for ( let i = 0; i < arrWord.length; i++) {
        if (arrWord[i] === letter) {
            SumLetter++;
        };
    }
    return SumLetter;
}

console.log(countLetter());

function convertCurrency(cash = '100$') {
    
    let correctCurrency;

    if (cash.indexOf("$") !== -1) {
        correctCurrency = ((parseInt(cash)) * 25) + "UAH"; 
    } else if (cash.indexOf("uah" || "UAH") !== -1) {
        correctCurrency = ((parseInt(cash)) / 25) + "$";
    } else {
        correctCurrency = "я не могу посчитать эту валюту";
    }
    
    return correctCurrency;
}

console.log(convertCurrency());







document.writeln (`Создать функцию getMaxDigit(number) – которая получает любое число и выводит самую большую цифру в этом числе (123456789) = ${getMaxDigit()} <br>
Создать функцию, которая вычисляет степень числа. Не используя Math.pow и **. Используйте цикл. 5 в 3й степени = ${powFunction(5, 3)} <br>
Создать функцию, которая форматирует имя, делая первую букву заглавной. oleH = ${uppercase()} <br>
Создать функцию, которая вычисляет сумму оставшуюся после оплаты налога от заработной платы. 1000 и 19,5% = ${(tax(1000, 19.5))} <br>
Создать функцию, которая возвращает случайное целое число в диапазоне от N до M от 10 до 100 = ${randomNumber()} <br>
Создать функцию, которая считает сколько раз определенная буква повторяется в слове <b>Асталависта<\/b> буква "а" = ${countLetter()} <br>
Создайте функцию конвертиующую доллары в гривны и наоборот в зависимости от наличия символа $ или UAH в строке = ${convertCurrency()} 
`);