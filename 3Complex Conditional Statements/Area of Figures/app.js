function areaOfFigures(args) { // V judge go priema bez [args]
    let aray = args["figure", "firstNumber", "seconNumber"];
    if (args[0] == "square") {
        console.log(args[1] * args[1]);
    } else if (args[0] == "rectangle") {
        console.log(args[1] * args[2]);
    } else if (args[0] == "triangle") {
        console.log(args[1] * args[2] / 2);
    } else if (args[0] == "circle") {
        console.log((Math.PI * args[1] * args[1]).toFixed(3));
    }
}
areaOfFigures(["square", "5"]);
areaOfFigures(["rectangle", "7", "2.5"]);
areaOfFigures(["circle", "8.55"]);
areaOfFigures(["triangle", "4.5", "7.5"]);