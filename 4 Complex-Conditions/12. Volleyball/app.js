function vladi([arg1, arg2, arg3]) {
    let year = arg1; // високосна или невисокосна година
    let p = Number(arg2); // празници в годината, който са делнични дни
    let h = Number(arg3); // уикенди, който пътува 
    let playInSofia = (48 - h) * 0.75; // брой съботи, който играе в София
    let playInHolidays = p * 2 / 3; //брой игри в София в делничен ден на празник
    let sumPlay = playInSofia + playInHolidays + h;
    if (year == "leap") {
        console.log(Math.floor(sumPlay + sumPlay * 0.15));
    } else {
        console.log(Math.floor(sumPlay));
    }
}
vladi(["normal", "3", "2"]);
vladi(["leap", "2", "3"]);
vladi(["normal", "11", "6"]);
vladi(["leap", "0", "1"]);
vladi(["normal", "6", "13"]);