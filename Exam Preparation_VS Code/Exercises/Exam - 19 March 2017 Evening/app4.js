function bills(args) {
    let months = Number(args[0]);
    let electricity = 0;
    let water = months * 20;
    let internet = months * 15;
    let others = 0;
    for (let i = 1; i < args.length; i++) {
        let currentNumber = Number(args[i]);
        electricity += currentNumber;
        others += (currentNumber + 20 + 15) + (currentNumber + 20 + 15) * 0.2;
    }
    let average = (water + internet + others + electricity) / months;
    console.log(`Electricity: ${electricity.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${others.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);
}
// bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"]);
bills(["8", "123.54", "231.54", "140.23", "100", "122.4",  "430", "178.52", "64.2"]);