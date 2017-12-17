function snowflake([arg1]) {
    let n = Number(arg1);
    let heigth = 2 * n + 1;
    let width = 2 * n + 3;
    for (let i = 0; i < n - 1; i++) {
        console.log(".".repeat(i) + "*" +
            ".".repeat(n - i) + "*" +
            ".".repeat(n - i) + "*"
            + ".".repeat(i));
    }
    console.log(".".repeat(n - 1) +
        "*".repeat(5) +
        ".".repeat(n - 1));
    console.log("*".repeat(width));
    console.log(".".repeat(n - 1) +
        "*".repeat(5) +
        ".".repeat(n - 1));
    for (let i = n - 1; i > 0; i--) {
        console.log(".".repeat(i - 1) + "*" +
            ".".repeat(n - i + 1) + "*" +
            ".".repeat(n - i + 1) + "*" +
            ".".repeat(i - 1));
    }
}
// snowflake(["3"]);
// snowflake(["5"]);
snowflake(["8"]);