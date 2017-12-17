function tree(arg1) {
    let n = Number(arg1);

    for (let i = 0; i < n + 1; i++) {
        console.log(" ".repeat(n - i) + "*".repeat(i) + " | " + "*".repeat(i) + " ".repeat(n - i));
    }
}
tree(["5"]);