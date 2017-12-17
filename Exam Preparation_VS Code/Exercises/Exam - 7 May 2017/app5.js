function crown([arg1]) {
    let n = Number(arg1);
    let width = 2 * n - 1;
    let height = n / 2 + 4;
    if (n >= 8 && n <= 50) {
        console.log("@" + " ".repeat(n - 2) + "@" + " ".repeat(n - 2) + "@");
        console.log("**" + " ".repeat(n - 3) + "*" + " ".repeat(n - 3) + "**");
        for (let i = 1; i < Math.ceil(height - 5); i++) {
            let middleSpace = width / 2 - i * 2 - 2;
            let middleDots = width - 2 * i - 6 - 2 * middleSpace;
            console.log("*" + ".".repeat(i) + "*" + " ".repeat(middleSpace) + "*" +
                ".".repeat(middleDots + 1) + "*" + " ".repeat(middleSpace) + "*" + ".".repeat(i) + "*");
        }
        if (n % 2 == 0) {
            console.log("*" + ".".repeat(n / 2 - 1) + "*" + ".".repeat(n - 3) + "*" + ".".repeat(n / 2 - 1) + "*");
        } else {
            console.log("*" + ".".repeat(n / 2 - 1) + "*" + ".".repeat(n - 2) + "*" + ".".repeat(n / 2 - 1) + "*");
        }
        console.log("*" + ".".repeat(n / 2) + "*".repeat(width / 2 - n / 2 - 1) + "." +
            "*".repeat(width / 2 - n / 2 - 1) + ".".repeat(n / 2) + "*");
        console.log("*".repeat(width))
        console.log("*".repeat(width));
    }
}
crown(["8"]);
crown(["10"]);