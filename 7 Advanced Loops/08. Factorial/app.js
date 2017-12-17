function factorial([arg1]) {
    let n = Number(arg1);
    let num = 1;

    do {
        num = num * n;
        n--;
    } while (n > 1);
    console.log(num);
}
factorial(["2"]);