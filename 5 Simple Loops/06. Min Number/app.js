function minNumber(args) {
    let n = Number(args[0]);
    let min = Number.POSITIVE_INFINITY;
    for (let i  = 1; i <= n; i++) {
        let currentNumber = Number(args[i]);
        if (currentNumber < min) {
          min = currentNumber;
        }
    }
   console.log(min); 
}
minNumber(["2", "100", "99"]);
//minNumber(["3", "-10", "-20", "-30"]);
