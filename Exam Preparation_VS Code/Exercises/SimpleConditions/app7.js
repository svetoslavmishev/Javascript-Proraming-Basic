function sumSeconds([arg1, arg2, arg3]) {
    let firstPlayer = Number(arg1);
    let secondPlayer = Number(arg2);
    let thirdPlayer = Number(arg3);
    let sumSeconds = firstPlayer + secondPlayer + thirdPlayer;
    let minutes = Math.floor(sumSeconds / 60);
    let seconds = sumSeconds % 60;
    if (seconds < 10) {
        console.log(minutes + ":0" + seconds);
    } else {
        console.log(minutes + ":" + seconds);
    }
}
sumSeconds(["35", "45", "44"]);
sumSeconds(["22", "7", "34"]);
sumSeconds(["14", "12", "10"]);
sumSeconds(["50", "50", "49"]);
sumSeconds(["1", "2", "3"]);