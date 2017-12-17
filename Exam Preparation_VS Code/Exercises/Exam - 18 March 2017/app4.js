function gameOfIntervals(args) {
    let moves = Number(args[0]);
    let points = 0;
    let count0To9 = 0;
    let count10To19 = 0;
    let count20To29 = 0;
    let count30To39 = 0;
    let count40To50 = 0;
    let countInvalidNumbers = 0;
    for (let i = 1; i < args.length; i++) {
        let element = Number(args[i]);
        if (element >= 0 && element <= 9) {
            points += element * 0.2;
            count0To9++;
        } else if (element >= 10 && element < 20) {
            points += element * 0.3;
            count10To19++;
        } else if (element >= 20 && element < 30) {
            points += element * 0.4;
            count20To29++;
        } else if (element >= 30 && element < 40) {
            points += 50;
            count30To39++;
        } else if (element >= 40 && element <= 50) {
            points += 100;
            count40To50++;
        } else if (element < 0 || element > 50) {
            points /= 2;
            countInvalidNumbers++;
        }
    }
    let totalCount = count0To9 + count10To19 + count20To29 + count30To39 + count40To50 + countInvalidNumbers;    
    console.log(points.toFixed(2));
    console.log(`From 0 to 9: ${(count0To9/ totalCount * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(count10To19/ totalCount * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(count20To29/ totalCount * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(count30To39/ totalCount * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(count40To50/ totalCount * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(countInvalidNumbers / totalCount * 100).toFixed(2)}%`);
}
// gameOfIntervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"]);
gameOfIntervals(["3", "12", "-23", "46"]);