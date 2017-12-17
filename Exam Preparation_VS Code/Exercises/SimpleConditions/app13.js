function figureArea([arg1, arg2, arg3]) {
    let a = Number(arg2);
    let b = Number(arg3);
    let figure = arg1;
    let area = 1;
    if (figure == "square") {
        area = a * a;
    } else if (figure == "triangle") {
        area = (a * b) / 2;
    } else if (figure == "rectangle") {
        area = a * b;
    } else if (figure == "circle") {
        area = Math.PI * a * a;
    }
    console.log(area.toFixed(3));
}
figureArea(["square", "5"]);
figureArea(["rectangle", "7", "2.5"]);
figureArea(["circle", "6"]);
figureArea(["triangle", "4.5", "20"]);
