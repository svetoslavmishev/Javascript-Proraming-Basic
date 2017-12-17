function sunglasses(arg1) {
    let n = Number(arg1);
    console.log("*".repeat(2 * n) + " ".repeat(n) + "*".repeat(2 * n));
    for (let i = 1; i <= n - 2; i++) {
        if (i == Math.ceil((n - 2) / 2)) {  // 1 % 2 == (5-2)/2= 1.5 
            console.log("*" + "/".repeat(2 * n - 2) + "*" +
                "|".repeat(n) + "*" + "/".repeat(2 * n - 2) + "*");
        } else {
            console.log("*" + "/".repeat(2 * n - 2) + "*" +
                " ".repeat(n) + "*" + "/".repeat(2 * n - 2) + "*");
        }
    }
    console.log("*".repeat(2 * n) + " ".repeat(n) + "*".repeat(2 * n));
}
// sunglasses(["3"]);
// sunglasses(["4"]);
sunglasses(["5"]);