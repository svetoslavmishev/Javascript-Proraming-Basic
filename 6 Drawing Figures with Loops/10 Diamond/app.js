function diamond(arg1) {
    let n = Number(arg1);
    let rowsCount = n;
    let starsCount = 1;
    if (n % 2 == 0) {
        rowsCount = n - 1;
        starsCount = 2;
    }
    let middlePartSize = starsCount;
    for (let i = 0; i < Math.ceil(n / 2); i++) {
        if (i == 0) {
            console.log("-".repeat((n - starsCount) / 2 - i) +
                "*".repeat(starsCount) + "-".repeat((n - starsCount) / 2 - i));
        }
        else {
            console.log("-".repeat((n - starsCount) / 2 - i) +
                "*" +
                "-".repeat(middlePartSize + 2 * (i - 1)) +
                "*" +
                "-".repeat((n - starsCount) / 2 - i));
        }
    }
    for (let i = Math.ceil(n / 2) - 2; i >= 0; i--) {
        if (i == 0) {
            console.log("-".repeat((n - starsCount) / 2 - i) +
                "*".repeat(starsCount) + "-".repeat((n - starsCount) / 2 - i));
        }
        else {
            console.log("-".repeat((n - starsCount) / 2 - i) +
                "*" +
                "-".repeat(middlePartSize + 2 * (i - 1)) +
                "*" +
                "-".repeat((n - starsCount) / 2 - i));
        }
    }
}
// diamond(["5"]);
diamond(["6"]);