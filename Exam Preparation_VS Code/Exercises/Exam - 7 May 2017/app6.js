function numberGenerator([arg1, arg2, arg3, arg4, arg5]) {
    let m = Number(arg1);
    let n = Number(arg2);
    let l = Number(arg3);
    let specialNumber = Number(arg4);
    let controlNumber = Number(arg5);
    for (let i = m; i >= 1; i--) {
        for (let j = n; j >= 1; j--) {
            for (let k = l; k >= 1; k--) {
                let mnl = "" + i + j + k;
                if (specialNumber >= controlNumber) {
                    break;
                }
                if (mnl % 3 == 0) {
                    specialNumber += 5;
                } else if (mnl % 3 != 0 && mnl % 10 == 5) {
                    specialNumber -= 2;
                } else if (mnl % 3 != 0 && mnl % 10 != 5 && mnl % 2 == 0) {
                    specialNumber *= 2;
                }
            }
        }
    }
    if (specialNumber >= controlNumber) {
        console.log(`Yes! Control number was reached! Current special number is ${specialNumber}.`);
    } else {
        console.log(`No! ${specialNumber} is the last reached special number.`);
    }
}
numberGenerator(["9", "7", "3", "2", "44"]);
numberGenerator(["1", "1", "7", "1", "308"]);