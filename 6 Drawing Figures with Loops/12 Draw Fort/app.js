function drawFort(arg1) {
    let n = parseInt(arg1);
    let width = 2 * n;
    let height = n;
    let column = Math.floor(n / 2);
    if (n > 2 && n <= 1000) {
        console.log("/" + "^".repeat(Math.floor(n / 2)) + "\\" +
            "_".repeat(width - (2 * column + 4)) +
            "/" + "^".repeat(n / 2) + "\\");
        for (let i = 1; i <= height - 3; i++) {
            console.log("|" + " ".repeat(width - 2) + "|");
        }
        console.log("|" + " ".repeat(Math.floor(n / 2) + 1) +
            "_".repeat(width - (2 * column + 4)) +
            " ".repeat(n / 2 + 1) + "|");
        console.log("\\" + "_".repeat(Math.floor(n / 2)) + "/" +
            " ".repeat(width - (2 * column + 4)) +
            "\\" + "_".repeat(n / 2) + "/");
    }
}
drawFort(["8"]);
// drawFort(["4"]);
// drawFort(["5"]);
// drawFort(["8"]);