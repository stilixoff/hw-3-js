function getMaxDigit() {
    let number = prompt(`Введите число не меньше 10`);

    while (number<10 || number - Math.floor(number) !==0) {
        number = prompt(`Введите число не меньше 10`);
    };

    let maxNumber = n[0];

    for (let i = 0; i < number.length; i++) {
        
    }

    return console.log(number.length);;
}

getMaxDigit();
