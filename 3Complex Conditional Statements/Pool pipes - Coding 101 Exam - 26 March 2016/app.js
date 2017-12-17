function poolPipes([arg1, arg2, arg3, arg4]) {
    let volume = parseInt(arg1);
    let p1 = parseInt(arg2);
    let p2 = parseInt(arg3);
    let hours = parseFloat(arg4);
    let p12Volume = hours * p1 + hours * p2;
    if (p12Volume <= volume) {
        let pipeOne = Math.floor(arg2 * hours / p12Volume * 100);
        let pipeTwo = Math.floor(arg3 * hours / p12Volume * 100);
        let pool = Math.floor(p12Volume / volume * 100);
        console.log("The pool is " + (pool) +
            "% full. Pipe 1: " + pipeOne + "%. Pipe 2: " + pipeTwo + "%.");
    } else {
        console.log("For " + (hours) + " hours the pool overflows with " +
            (p12Volume - volume).toFixed(1) + " liters.");
    }
}
poolPipes(["2222", "100", "120", "3"]);
poolPipes(["100", "100", "100", "2.5"]);
poolPipes(["100", "100", "100", "20"]);