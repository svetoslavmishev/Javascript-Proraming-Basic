function catTom([arg1]) {
    let restDays = Number(arg1);
    let workMinutes = (365 - restDays) * 63;
    let restMinutes = restDays * 127;
    let sumMinutes = workMinutes + restMinutes;
    let hours = Math.trunc(Math.abs(sumMinutes - 30000) / 60);
    let minutes = Math.abs(sumMinutes - 30000) % 60;
    if (sumMinutes > 30000) {
        console.log('Tom will run away');
        console.log(hours + " hours and " + minutes + " minutes more for play ");
    } else if (sumMinutes < 30000) {
        console.log('Tom sleeps well');
        console.log(hours + " hours and " + minutes + " minutes less for play");
    }
}
catTom(["20"]);
catTom(["113"]);