function digits([arg1]) {
    let num = Number(arg1);
    let first = Math.trunc(num / 100);
    let second = Math.trunc((num % 100) / 10);
    let third = num % 10;
    let result = "";
    for (let i = 0; i < first + second; i++) {
        for (let j = 0; j < first + third; j++) {
            if (num % 5 == 0) {
                num -= first;
                result += num + " ";
            } else if (num % 3 == 0) {
                num -= second;
                result += num + " ";
            } else {
                num += third;
                result += num + " ";
            }
        }
        console.log(result);
        result = "";
    }
}
// digits(["132"]);
digits(["376"]);