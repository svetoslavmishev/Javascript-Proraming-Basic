function axe([arg1]) {
    let n = Number(arg1);
    let width = 5 * n;
    let leftSide = n * 3;

    console.log("-".repeat(leftSide) + "*".repeat(2) + "-".repeat(2 * n - 2));
    for (let i = 0; i < n - 1; i++) {
        console.log("-".repeat(leftSide) + "*" + "-".repeat(i + 1) + "*" + "-".repeat(width - leftSide - i - 3));
    }
    for (let j = 0; j < Math.floor(n / 2); j++) {
        console.log("*".repeat(leftSide + 1) + "-".repeat(n - 1) + "*" + "-".repeat(n - 1));
    }
    for (let k = 0; k <= Math.floor(n / 2 - 1); k++) {
        let middleParts = n - 1 + k * 2;
        if (k == Math.floor(n / 2 - 1)) {
            console.log("-".repeat(leftSide - k) + "*" + "*".repeat(middleParts) + "*" + "-".repeat(n - k - 1));
        } else {
            console.log("-".repeat(leftSide - k) + "*" + "-".repeat(middleParts) + "*" + "-".repeat(n - k - 1));
        }
    }
}
axe(["2"]);
