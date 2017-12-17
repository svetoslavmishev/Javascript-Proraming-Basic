function softuniLogo([arg1]) {
    let n = Number(arg1);
    let height = 4 * n - 2;
    let width = 12 * n - 5;
    console.log(".".repeat(6 * n - 3) +
        "#" + ".".repeat(6 * n - 3));
    for (let i = 1; i <= height / 2; i++) {
        console.log(".".repeat(6 * n - 3 * i - 3) +
            "#".repeat(6 * i + 1) +
            ".".repeat(6 * n - 3 * i - 3));
    }
    for (let i = 0; i < n - 2; i++) {
        console.log("|" + ".".repeat(3 * i + 2) +
            "#".repeat(width - 2 * (3 * i + 2) - 2) +
            ".".repeat(3 * i + 3));
    }
    for (let i = 0; i < n; i++) {
        if (i == n-1) {
            console.log("@" + ".".repeat(3 * n - 4) +
            "#".repeat(6 * n + 1) +
            ".".repeat(3 * n - 3));
        } else {
            console.log("|" + ".".repeat(3 * n - 4) +
                "#".repeat(6 * n + 1) +
                ".".repeat(3 * n - 3));
        }
    }
}
softuniLogo(["3"]);
softuniLogo(["4"]);
softuniLogo(["5"]);