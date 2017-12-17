function histogram(args) {
    let n = Number(args[0]); // брой числа в хисторамата
    let p1 = 0;   // брой на числата, който попадат в съответния интервал
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    for (let i = 1; i <= n; i++) {
        let currentNumber = Number(args[i]);
        if (currentNumber < 200) {
            p1 += 1;
        } else if (currentNumber <= 399) {
            p2 += 1;
        } else if (currentNumber <= 599) {
            p3 += 1;
        } else if (currentNumber <= 799) {
            p4 += 1;
        } else if (currentNumber >= 800) {
            p5 += 1;
        }
    }
    console.log((p1 / n * 100).toFixed(2) + "%");
    console.log((p2 / n * 100).toFixed(2) + "%");
    console.log((p3 / n * 100).toFixed(2) + "%");
    console.log((p4 / n * 100).toFixed(2) + "%");
    console.log((p5 / n * 100).toFixed(2) + "%");
}
//histogram(["3", "1", "2", "999"]);
//histogram(["4", "53", "7", "56","999"]);
//histogram(["7", "800", "801", "250","199", "399","599", "799"]);
histogram(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"]);