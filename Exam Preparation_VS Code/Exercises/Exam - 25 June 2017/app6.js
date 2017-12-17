function sumOrMultiplication([arg1]) {
    let controlNumber = Number(arg1);
    let sum = 0;
    let multi = 0;
    let checkSumOrMulti = 0;
    for (let a = 1; a <= 30; a++) {
        for (let b = 1; b <= 30; b++) {
            for (let c = 1; c <= 30; c++) {
                sum = a + b + c;
                multi = a * b * c;
                if (sum == controlNumber) {
                    if (a < b && b < c) {
                        console.log(a + " + " + b + " + " + c + " = " + sum);
                        checkSumOrMulti++;
                    }
                } else if (multi == controlNumber) {
                    if (a > b && b > c) {
                        console.log(a + " * " + b + " * " + c + " = " + multi);
                        checkSumOrMulti++;
                    }
                }                
            }
        }
    }
    if (checkSumOrMulti == 0) {
        console.log("No!");
    }
}
// sumOrMultiplication(["12"]);
// sumOrMultiplication(["100"]);
sumOrMultiplication(["93"]);
sumOrMultiplication(["75"]);