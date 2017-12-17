function smartLili([arg1, arg2, arg3]) {
    let age = Number(arg1);
    let washingMachine = Number(arg2);
    let toyPrice = Number(arg3);
    let levs = 0;
    let brother = 0;
    let toysNumber = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            levs += i * 5;
            brother++;
        } else {
            toysNumber++;
        }
    }
    let levsFromToys = toyPrice * toysNumber;
    let total = levs - brother + levsFromToys;
    let difference = Math.abs(total - washingMachine);
    if (total >= washingMachine) {
        console.log("Yes! " + difference.toFixed(2));
    } else {
        console.log("No! " + difference.toFixed(2));
    }
}
smartLili(["10", "170.00", "6"]); // yes 5
smartLili(["21", "1570.98", "3"]);// no 997.98