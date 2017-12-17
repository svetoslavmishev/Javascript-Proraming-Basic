function rocket([arg1]) {
    let n = Number(arg1);
    let width = 3 * n;
    for (let i = 0; i < n; i++) {
        console.log(".".repeat((3 * n - 2) / 2 - i) +
            "/" +
            " ".repeat(2 * i) + "\\" +
            ".".repeat((3 * n - 2) / 2 - i));
    }
    console.log(".".repeat(n / 2) +
        "*".repeat(2 * n) + ".".repeat(n / 2));
    for (let i = 0; i < 2 * n; i++) {
        console.log(".".repeat(n / 2) +
            "|" +
            "\\".repeat(2 * n - 2) +
            "|" +
            ".".repeat(n / 2));
    }
    for (let i = 1; i <= n / 2; i++) {
        console.log(".".repeat(n / 2 - i + 1) +
            "/" +
            "*".repeat(width - n + 2 * i - 4) +
            "\\" +
            ".".repeat(n / 2 - i + 1));
    }
}
rocket(["4"]);
rocket(["6"]);
rocket(["8"]);