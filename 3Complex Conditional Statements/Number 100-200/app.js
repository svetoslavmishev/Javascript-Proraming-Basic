function between100And200([arg1]) {
    let num = Number(arg1);
    if (num < 100) {
        console.log("Less than 100");
    } else if (num >= 100 && num <= 200) {
        console.log("Between 100 and 200");
    } else if (num >= 200) {
        console.log("Greater than 200");
    }
}
between100And200(["95"]);
between100And200(["120"]);
between100And200(["200"]);
between100And200(["100"]);