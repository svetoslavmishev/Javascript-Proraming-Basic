function parallelepiped([arg1]) {
    let n = Number(arg1);
    let height = 4 * n + 4;
    let width = 3 * n + 1;
    console.log("+" + "~".repeat(n - 2) +
        "+" + ".".repeat(width - n));
    for (let i = 0; i <= (height / 2 - 2); i++) {
        console.log("|" + ".".repeat(i) +
            "\\" + "~".repeat(n - 2) + "\\" +
            ".".repeat(2 * n - i));
    }
    for (let j = 0; j <= (height / 2 - 2); j++) {
        console.log(".".repeat(j) + "\\" +
            ".".repeat(n * 2 - j) + "|" + "~".repeat(n - 2) + "|");
    }
    console.log(".".repeat(width - n) +
        "+" + "~".repeat(n - 2) + "+");
}
parallelepiped(["5"]);
// parallelepiped(["6"]);
// parallelepiped(["7"]);