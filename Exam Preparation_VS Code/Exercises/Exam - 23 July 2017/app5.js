function cup([arg1]) {
    let n = Number(arg1);
    let width = 5 * n;
    for (let i = 0; i < n + 1; i++) {
        if (i >= n / 2 && i <= n + 1) {
            console.log(".".repeat(n + i) + "#" + ".".repeat(width - 2 * (n + i) - 2) + "#" + ".".repeat(n + i));
        } else {
            console.log(".".repeat(n + i) + "#".repeat(width - 2 * (n + i)) + ".".repeat(n + i));
        }
    }
    console.log(".".repeat(2 * n) + "#".repeat(n) + ".".repeat(2 * n));

    for (let i = 0; i < n + 2; i++) {
        if (i == n / 2) {
            console.log(".".repeat((width - 10) / 2) + "D^A^N^C^E^" + ".".repeat((width - 10) / 2));
        } else {
            console.log(".".repeat(2 * n - 2) + "#".repeat(width - 2 * (2 * n - 2)) + ".".repeat(2 * n - 2));
        }
    }
}
cup(["6"]);
cup(["8"]);