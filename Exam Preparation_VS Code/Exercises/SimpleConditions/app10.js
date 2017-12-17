function checkNumbers([arg1]) {
    let numberToCheck = Number(arg1);
    if (numberToCheck < 100) {
        console.log("Less than 100");
    } else if (numberToCheck <= 200) {
        console.log("Between 100 and 200");
    } else {
        console.log("Greater than 200");
    }
}
checkNumbers(["95"]);
checkNumbers(["120"]);
checkNumbers(["210"]);