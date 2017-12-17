function isExcellent([arg1]) {
    let excellent = Number(arg1);
    if (excellent >= 5.50) {
        console.log("Excellent!");
    }
}
isExcellent(["6"]);
isExcellent(["5"]);
isExcellent(["5.50"]);
isExcellent(["5.49"]);