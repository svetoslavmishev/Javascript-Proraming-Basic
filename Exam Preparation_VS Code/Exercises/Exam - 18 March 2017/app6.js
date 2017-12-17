function sumOfTwoNumbers([arg1, arg2, arg3]) {
    let startInterval = Number(arg1);
    let endInterval = Number(arg2);
    let magicNumber = Number(arg3);
    let combinations = 0;
    let breakLoop = false;
    for (let i = startInterval; i <= endInterval; i++) {
        for (let j = startInterval; j <= endInterval; j++) {
            combinations++;
            if (i + j == magicNumber) {
                breakLoop = true;
                console.log(`Combination N:${combinations} (${i} + ${j} = ${magicNumber})`);
                return;
            }
        }
    }
    if (breakLoop == false) {
        console.log(`${combinations} combinations - neither equals ${magicNumber}`);
    }
}
sumOfTwoNumbers(["1", "10", "5"]);
sumOfTwoNumbers(["23", "24", "20"]);
sumOfTwoNumbers(["88", "888", "1000"]);
sumOfTwoNumbers(["88", "888", "2000"]);

