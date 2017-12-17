function exam([arg1, arg2, arg3, arg4]) {
    let examHour = Number(arg1);
    let examMinute = Number(arg2);
    let examArriveHour = Number(arg3);
    let examArriveMinute = Number(arg4);
    let examInMinutes = examHour * 60 + examMinute;
    let examArriveInMinutes = examArriveHour * 60 + examArriveMinute;
    let diffTime = examInMinutes - examArriveInMinutes;

    if (diffTime < 0) {
        console.log("Late");
    } else if (diffTime <= 30) {
        console.log("On time");
        if (diffTime != 0) {
            console.log(diffTime + " minutes before the start");
        }
    } else {
        console.log("Early");
        if (diffTime < 60) {
            console.log();
        } else {
            let hours = Math.abs(Math.trunc(diffTime / 60));
            let minutes = Math.abs(diffTime % 60);
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            console.log(diffTime + " minutes before the start");
        }
    }
}
//exam(["9", "00", "10", "30"]); //"Late" 590 - час на изпита, 510 - час на пристигане 
//exam(["9", "30", "9", "50"]); //"Late" 590 - час на изпита, 510 - час на пристигане 
exam(["9", "00", "8", "30"]); //"On time" 540 - час на изпита, 510 - час на пристигане
//exam(["16", "00", "15", "00"]); //"Early" 960 - час на изпита, 900 - час на пристигане   60 min 1 chas