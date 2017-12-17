function numberInRange(args) {
    let i = 0;
    let currentNumber = Number(args[i]);

    while (currentNumber < 1 || currentNumber > 100) {
        console.log("Invalid number!");
        i++;
        currentNumber = Number(args[i]);
    }
    console.log("The number is: " + currentNumber);
}
// numberInRange(["1001", "35"]);
numberInRange(["105", "0", "-200", "77"]);
