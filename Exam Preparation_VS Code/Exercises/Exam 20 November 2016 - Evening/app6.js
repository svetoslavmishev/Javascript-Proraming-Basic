function maxCombination([arg1, arg2, arg3]) {
    let startInterval = Number(arg1);
    let endInterval = Number(arg2);
    let maxCombination = Number(arg3);
    let counterCombinations = 0;
    let result = "";
    let breakLoop = false;
    for (let i = startInterval; i <= endInterval; i++) {
        for (let j = startInterval; j <= endInterval; j++) {
            counterCombinations++;
            result += "" + "<" + i + "-" + j + ">";
            if (counterCombinations == maxCombination) {
                breakLoop = true;
                break;
            }
        }
        if (breakLoop) {
            break;
        }
    }
    console.log(result);
}
maxCombination(["1", "4", "5"]);
maxCombination(["69", "71", "100"]);
maxCombination(["45", "120", "20"]);