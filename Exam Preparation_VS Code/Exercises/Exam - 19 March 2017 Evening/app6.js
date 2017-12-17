function controlNumber([arg1, arg2, arg3]) {
    let n = Number(arg1);
    let m = Number(arg2);
    let controlNumber = Number(arg3);
    let sum = 0;
    let moves = 0;
    let breakLoops = false;
    for (let firstNumber = 1; firstNumber <= n; firstNumber++) {
        for (let secondNumber = m; secondNumber >= 1; secondNumber--) {
            sum += firstNumber * 2 + secondNumber * 3;
            moves++;
            if (sum >= controlNumber) {
                breakLoops = true; // така се приключва вътрешния цикъл но не и външния
                break;
            }
        }
        if (breakLoops) { // тук приключваме и външния цикъл, защото така е условието
            break;
        }
    }
    if (sum >= controlNumber) {
        console.log(`${moves} moves`);
        console.log(`Score: ${sum} >= ${controlNumber}`);
    } else if (sum < controlNumber) {
        console.log(`${moves} moves`);
    }
}
// controlNumber(["2", "2", "123"]);
controlNumber(["3", "4", "115"]);