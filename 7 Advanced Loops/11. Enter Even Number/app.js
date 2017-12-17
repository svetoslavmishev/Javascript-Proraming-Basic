function enterEvenNumber(args) {
    for (let i = 0; i < args.length; i++) {
        let currentNumber = Number(args[i]);
        if (currentNumber % 2 == 0) {
            console.log("Even number entered: " + currentNumber);
            break;
        }
        console.log("The number is not even.");
    }
}
enterEvenNumber(["4345", "3", "4", "88"]);