function diamond([arg1]) {
    let n = Number(arg1);
    let width = 5 * n;
    let height = 3 * n + 2;
    console.log(".".repeat(n) + "*".repeat(width - 2 * n) + ".".repeat(n));
    for (let i = 1; i <= n - 1; i++) {
        console.log(".".repeat(n - i) + "*" + ".".repeat(width - 2 * (n - i) - 2) + "*" + ".".repeat(n - i));
    }
    console.log("*".repeat(width));
    for (let i = 1; i <= 2 * n; i++) {
        console.log(".".repeat(i) + "*" + ".".repeat(width - 2 * i - 2) + "*" + ".".repeat(i));
    }
    console.log(".".repeat(2 * n + 1) + "*".repeat(n - 2) + ".".repeat(2 * n + 1));
}
diamond(["4"]);
diamond(["7"]);