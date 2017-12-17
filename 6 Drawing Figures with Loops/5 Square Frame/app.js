function squareFrame(arg1) {
    let n = Number(arg1);

    for (let i = 0; i < n - (n - 1); i++) {
        console.log("+ " + "- ".repeat(n - 2) + "+");
        for (let j = 0; j < n - 2; j++) {
            console.log("| " + "- ".repeat(n - 2) + "|");
        }
        console.log("+ " + "- ".repeat(n - 2) + "+");
    }

/*    for (let i = 0; i < n; i++) {
        if (i == 0 || i == n - 1) {
            console.log("+ " + "- ".repeat(n - 2) + "+");
        } else {
            console.log("| " + "- ".repeat(n - 2) + "|");
        }
*/

}
//squareFrame("3");
//squareFrame("4");
squareFrame("5");
//squareFrame("6");