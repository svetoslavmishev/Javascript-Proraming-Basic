function stop(arg1) {
    let n = parseInt(arg1);

    if (n >= 3 && n <= 1000) {
        console.log(".".repeat(n + 1) + "_".repeat(n * 2 + 1) + ".".repeat(n + 1));
        for (let i = 0; i < n; i++) {
            console.log(".".repeat(n - i) + "//" + "_".repeat(n * 2 + (2 * i) - 1) + "\\".repeat(2) + ".".repeat(n - i));
        }
        console.log("//" + "_".repeat(n * 2 - 3) + "STOP!" + "_".repeat(n * 2 - 3) + "\\".repeat(2));
        console.log("\\".repeat(2) + "_".repeat(n * 4 - 1) + "//");
        for (let i = n - 1; i > 0; i--) {
            console.log(".".repeat(n - i) + "\\".repeat(2) + "_".repeat(n * 2 + (2 * i) - 1) + "//" + ".".repeat(n - i));
        }
    }
}
stop(["3"]);
stop(["6"]);
stop(["7"]);
