function triangle([arg1]) {
    let n = Number(arg1);
    let width = 4 * n + 1;
    let height = 2 * n + 1;
    console.log("#".repeat(width));
    for (let i = 1; i <= height - n - 1; i++) {
        if (i == Math.ceil((n + 1) / 2) && i != 1) {
            console.log(".".repeat(i) + "#".repeat(width / 2 - 2 * i + 1) +
                " ".repeat(width - 2 - (width - i)) + "(@)" +
                " ".repeat(width - 2 - (width - i)) + "#".repeat(width / 2 - 2 * i + 1) + ".".repeat(i));
        } else {
            console.log(".".repeat(i) + "#".repeat(width / 2 - 2 * i + 1) +
                " ".repeat(2 * i - 1) + "#".repeat(width / 2 - 2 * i + 1) +
                ".".repeat(i));
        }
    }
    for (let i = 1; i <= n; i++) {
        console.log(".".repeat(n + i) + "#".repeat(width - 2 * (n + i)) +
            ".".repeat(n + i));
    }
}
triangle(["2"]);
triangle(["5"]);
triangle(["8"]);
triangle(["11"]);