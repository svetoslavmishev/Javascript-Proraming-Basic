function squareOfStars([arg1]) {
    let n = Number(arg1);
    console.log("*".repeat(n));
    for (var i = 0; i < n - 2; i++) {
        console.log("*" + " ".repeat(n - 2) + "*");
    }
    console.log("*".repeat(n));
}
squareOfStars([3]);
squareOfStars([4]);
squareOfStars([5]);