function groupName([arg1, arg2, arg3, arg4, arg5]) {
    let firstUpperLetter = arg1.charCodeAt();
    let secondLowerLetter = arg2.charCodeAt();
    let thirdLowerLetter = arg3.charCodeAt();  // arg1.fromCharCode(97) - дава буква " " от ASCII таблицата,като стринг
    let fourthLowerLetter = arg4.charCodeAt(); // може да се ползва и метода "A".tocharCodeAt(0) и взима първата бувка от стринга
    let num = Number(arg5);
    let counter = -1;
    for (let i = 65; i <= firstUpperLetter; i++) {
        for (let j = 97; j <= secondLowerLetter; j++) {
            for (let k = 97; k <= thirdLowerLetter; k++) {
                for (let l = 97; l <= fourthLowerLetter; l++) {
                    for (let m = 0; m <= num; m++) {
                        counter++;
                    }
                }
            }
        }
    }
    console.log(counter);
}
groupName(["A", "a", "a", "a", "0"]);
groupName(["K", "a", "b", "c", "5"]);
groupName(["I", "v", "a", "n", "1"]);