function timeAfter15Minutes([arg1, arg2]) {
    let hours = Number(arg1);
    let minutes = Number(arg2) + 15;
    if (minutes > 59) {
        minutes = minutes % 60;
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        hours++;
        if (hours > 23) {
            hours -= 24;
        }
    }
    console.log(`${hours}:${minutes}`);
}
timeAfter15Minutes(["1", "46"]);
timeAfter15Minutes(["0", "01"]);
timeAfter15Minutes(["23", "59"]);
timeAfter15Minutes(["11", "08"]);
timeAfter15Minutes(["12", "49"]);