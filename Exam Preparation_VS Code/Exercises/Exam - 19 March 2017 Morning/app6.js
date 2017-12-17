function hourglass([arg1]) {
    let n = Number(arg1);
    let width = 2 * n + 1;
    let height = width;
    console.log("*".repeat(width));
    console.log("." + "*" + " ".repeat(width - 4) + "*" + ".");
    for (let i = 1; i <= n - 2; i++) {
        console.log(".".repeat(i + 1) + "*" + "@".repeat(width - 2 * (i + 1) - 2) + "*" + ".".repeat(i + 1));
    }
    console.log(".".repeat(width / 2) + "*" + ".".repeat(width / 2));
    for (let i = 1; i <= n - 2; i++) {
        console.log(".".repeat(n - i) + "*" + " ".repeat((width - 2 * (n - i) - 2) / 2) + "@" +
            " ".repeat((width - 2 * (n - i) - 2) / 2) + "*" + ".".repeat(n - i));
    }
    console.log("." + "*" + "@".repeat(width - 4) + "*" + ".");
    console.log("*".repeat(width));
}
hourglass(["5"]);
hourglass(["7"]);
hourglass(["9"]);