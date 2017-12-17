function checkNumber([arg1]) {
    let num = Number(arg1);
    let isValid = (num >= 100 && num <= 200) || (num == 0);
    if (!isValid) {
        console.log("Invalid");
    }
}
checkNumber(["75"]);
checkNumber(["180"]);