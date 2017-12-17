function lettersCombinations([arg1, arg2, arg3]) {
    let startInterval = arg1.charCodeAt();
    let endInterval = arg2.charCodeAt();
    let skip = arg3.charCodeAt();
    let result = "";
    let counter = 0;
    for (let i = startInterval; i <= endInterval; i++) {
        for (let j = startInterval; j <= endInterval; j++) {
            for (let k = startInterval; k <= endInterval; k++) {
                if (i != skip && j != skip && k != skip) {
                    result += "" + String.fromCharCode(i) +
                        String.fromCharCode(j) +
                        String.fromCharCode(k) + " ";
                    counter++;
                }
            }
        }
    }
    console.log(result + counter);
}
// lettersCombinations(["a", "c", "b"]);
lettersCombinations(["f", "k", "h"]);
// lettersCombinations(["a", "c", "z"]);