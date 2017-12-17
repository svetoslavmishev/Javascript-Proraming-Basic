function house(arg1) {
    let n = Number(arg1);
    let starsCount = 1;

    if (n % 2 == 0) {
        starsCount = 2;
    }
    for (let i = 1; i <= Math.ceil(n / 2); i++) {
        console.log("-".repeat((n - starsCount) / 2) + "*".repeat(starsCount) +
            "-".repeat((n - starsCount) / 2));
        starsCount += 2;
    }
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        console.log("|" + "*".repeat(n - 2) + "|");
    }
}
// house(["2"]);
// house(["3"]);
//house(["4"]);    
// house(["5"]);
house(["6"]);

