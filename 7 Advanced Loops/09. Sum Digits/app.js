function sumDigits([arg1]) {
    let num = Number(arg1);
    let sumNumber = 0;

    while (num != 0) {
        let lastDigit = num % 10; // взимаме последната цифра
        sumNumber += lastDigit;
        num = Math.floor(num / 10); // отрязване на последната цифра
    }
    console.log(sumNumber);
}
sumDigits(["5634"]);