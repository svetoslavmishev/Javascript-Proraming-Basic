function oddEvenPosition(args) {
    let n = Number(args[0]);
    let evenSum = 0;
    let oddSum = 0;
    let evenMin = Number.POSITIVE_INFINITY;
    let evenMax = Number.NEGATIVE_INFINITY;
    let oddMin = Number.POSITIVE_INFINITY;
    let oddMax = Number.NEGATIVE_INFINITY;

    for (i = 1; i <= n; i += 2) {
        oddSum += Number(args[i]);
    }
    for (let i = 1; i <= n; i += 2) {
        let currentOddNumber = Number(args[i]);
        if (currentOddNumber < oddMin) {
            oddMin = currentOddNumber;
        }
        if (currentOddNumber > oddMax) {
            oddMax = currentOddNumber;
        }
    }
    for (i = 1; i < n; i += 2) {
        evenSum += Number(args[i + 1]);
    }
    for (i = 1; i <= n; i += 2) {
        let currentEvenNumber = Number(args[i + 1]);
        if (currentEvenNumber < evenMin) {
            evenMin = currentEvenNumber;
        }
        if (currentEvenNumber > evenMax) {
            evenMax = currentEvenNumber;
        }
    }
    console.log(`OddSum=${oddSum},`);
    if (n == 0 || oddMin == Infinity) {
        console.log("OddMin=No");
    } else {
        console.log(`OddMin=${oddMin},`);
    }
    if (n == 0 || oddMax == Infinity) {
        console.log("OddMax=No");
    } else {
        console.log(`OddMax=${oddMax},`);
    }
    console.log(`EvenSum=${evenSum},`);
    if (n == 0 || evenMin == Infinity) {
        console.log("EvenMin=No");
    } else {
        console.log(`EvenMin=${evenMin},`);
    }
    if (n == 0 || evenMax == -Infinity) {
        console.log("EvenMax=No");
    } else {
        console.log(`EvenMax=${evenMax},`);
    }
}
//oddEvenPosition(["6", "2", "3", "5", "4", "2", "1"]);
//oddEvenPosition(["1", "1"]);
oddEvenPosition(["0"]);
//oddEvenPosition(["1", "-5"]);
//oddEvenPosition(["2", "1.5", "-2.5"]);
//              [ 0    1    2    3    4    5    6 ]
