function sumSeconds([arg1, arg2, arg3]) {
    let firstTime = Number(arg1);
    let secondTime = Number(arg2);
    let thirdTime = Number(arg3);
    let sumTimes = firstTime + secondTime + thirdTime;
    let minutes = Math.floor(sumTimes / 60);
    let seconds = sumTimes % 60;
    
    if (seconds <= 9) {
        seconds = "0" + seconds;
    }
    console.log(minutes + ":" + seconds);
}
sumSeconds(["35", "45", "44"]);
