function greatestDivisor([arg1, arg2]) {
    let a = Number(arg1);
    let b = Number(arg2);

    while (b != 0) {
        let oldb = b; // задаваме променлива , която живее само в цикъла
        b = a % b;
        a = oldb;
    }
    console.log(a);
}
greatestDivisor(["24", "16"]);
// greatestDivisor(["67", "18"]);