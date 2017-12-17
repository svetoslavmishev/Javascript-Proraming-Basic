function footballLeague(args) {
    let stadium = Number(args[0]);
    let fans = Number(args[1]);
    let sectorA = "A";
    let sectorB = "B";
    let sectorV = "V";
    let sectorG = "G";
    let counterA = 0;
    let counterB = 0;
    let counterV = 0;
    let counterG = 0;
    if (stadium <= 10000 && fans <= 10000) {
        for (let i = 2; i < args.length; i++) {
            let num = args[i];
            if (sectorA == num) {
                counterA++;
            } else if (sectorB == num) {
                counterB++;
            } else if (sectorV == num) {
                counterV++;
            } else if (sectorG == num) {
                counterG++;
            }
        }
        console.log((counterA / fans * 100).toFixed(2) + "%");
        console.log((counterB / fans * 100).toFixed(2) + "%");
        console.log((counterV / fans * 100).toFixed(2) + "%");
        console.log((counterG / fans * 100).toFixed(2) + "%");
        console.log((fans / stadium * 100).toFixed(2) + "%");
    }
}
footballLeague(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);
footballLeague(["1000", "12", "A", "A", "V", "V", "A", "G", "A", "A", "V", "G", "V", "A"]);