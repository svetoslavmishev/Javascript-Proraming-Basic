function rhombsOfStars(arg1) {
    let n = Number(arg1);
    let result = "";

    for (let i = 1; i <= n; i++) {
        console.log(" ".repeat(n - i) + "* ".repeat(i));
    }
    for (let i = n - 1; i >= 1; i--) {
        console.log(" ".repeat(n - i) + "* ".repeat(i));
    }
}
rhombsOfStars(["2"]);
rhombsOfStars(["3"]);
rhombsOfStars(["4"]);