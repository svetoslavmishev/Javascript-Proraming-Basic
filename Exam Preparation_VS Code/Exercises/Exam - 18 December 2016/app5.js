function christmasHat([arg1]) {
    let n = Number(arg1);
    let width = 4 * n + 1;
    let height = 2 * n + 5;
    console.log(".".repeat(2 * n - 1) + "/|\\" + ".".repeat(2 * n - 1));
    console.log(".".repeat(2 * n - 1) + "\\|/" + ".".repeat(2 * n - 1));
    console.log(".".repeat(2 * n - 1) + "*".repeat(3) + ".".repeat(2 * n - 1));
    for (let i = 1; i <= height - 6; i++) {
        console.log(".".repeat(2 * n - i - 1) +
            "*" + "-".repeat(i) + "*" +
            "-".repeat(i) + "*" +
            ".".repeat(2 * n - i - 1));
    }
    for (let i = 1; i <= 3; i++) {
        if (i % 2 != 0) {
            console.log("*".repeat(width));
        } else {
            console.log("*.".repeat(width / 2) + "*");
        }
    }
}
christmasHat(["4"]);
christmasHat(["7"]);