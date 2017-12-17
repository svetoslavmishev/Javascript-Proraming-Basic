function buterfly(arg1) {
    let n = Number(arg1);
    let width = 2 * n - 1;
    let lenght = 2 * (n - 2) + 1;

    if (n > 2) {
        for (let i = 0; i < Math.floor(lenght / 2); i++) {
            if (i % 2 == 0) {
                console.log("*".repeat(lenght / 2) + "\\ /" + "*".repeat(lenght / 2));
            } else {
                console.log("-".repeat(lenght / 2) + "\\ /" + "-".repeat(lenght / 2));
            }
        }
        console.log(" ".repeat((width - 1) / 2) + "@");
        for (let i = Math.floor(lenght / 2) - 1; i >= 0; i--) {
            if (i % 2 == 0) {
                console.log("*".repeat(lenght / 2) + "/ \\" + "*".repeat(lenght / 2));
            } else {
                console.log("-".repeat(lenght / 2) + "/ \\" + "-".repeat(lenght / 2));
            }
        }
    }

 /*   if (n > 0) { Решение на Ванката
        for (let i = 0; i < Math.floor(height); i++) {
            if (i % 2 === 0) {
                console.log("*".repeat(n - 2) + "\\ /" + "*".repeat(n - 2));
            } else {
                console.log("-".repeat(n - 2) + "\\ /" + "-".repeat(n - 2));
            }
        }

        console.log(" ".repeat(n - 1) + "@" + " ".repeat(n - 1));

        for (let i = Math.floor(height) - 1; i >= 0; i--) {
            if (i % 2 === 0) {
                console.log("*".repeat(n - 2) + "/ \\" + "*".repeat(n - 2));
            } else {
                console.log("-".repeat(n - 2) + "/ \\" + "-".repeat(n - 2));
            }
        }
    }*/
}
buterfly("3");
// buterfly("5");
// buterfly("7");



