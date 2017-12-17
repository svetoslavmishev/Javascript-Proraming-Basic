function speedInfo([arg1]) {
    let speed = parseFloat(arg1);
    let infoString = "slow";
    if (speed <= 10) {
        infoString;
    } else if (speed <= 50) {
        infoString = "average";
    } else if (speed <= 150) {
        infoString = "fast";
    } else if (speed <= 1000) {
        infoString = "ultra fast";
    } else if (speed > 1000) {
        infoString = "extremely fast";
    }
    console.log(infoString);
}
speedInfo(["8"]);
speedInfo(["49.5"]);
speedInfo(["126"]);
speedInfo(["160"]);
speedInfo(["3500"]);