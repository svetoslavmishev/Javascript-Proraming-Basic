function twoNumbersSum([arg1, arg2, arg3]) {
    let startInterval = Number(arg1);
    let endInterval = Number(arg2);
    let magicNumber = Number(arg3);
    let combinations = 0;
    for (let i = startInterval; i >= endInterval; i--) {
        for (let j = startInterval; j >= endInterval; j--) {
            combinations++;
            if (i + j == magicNumber) {
                console.log(`Combination N:${combinations} (${i} + ${j} = ${magicNumber})`);
                return;
            } else if (i == endInterval && j == endInterval) {
                console.log(`${combinations} combinations - neither equals ${magicNumber}`);
            }
        }
    }
}
twoNumbersSum(["10", "1", "5"]);
twoNumbersSum(["24", "23", "20"]);
twoNumbersSum(["888", "88", "1000"]);
twoNumbersSum(["888", "88", "2000"]);