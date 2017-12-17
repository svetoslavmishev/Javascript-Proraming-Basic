function pointInFigure([arg1, arg2, arg3]) {
    let h = Number(arg1);
    let x = Number(arg2);
    let y = Number(arg3);
    let figureHorInBorder = (x >= 0 && x <= 3 * h && y >= 0 && y <= h);
    let figureVertInBorder = (x >= h && x <= 2 * h & y >= h && y <= 4 * h);
    let insideHorizontal = (x > 0 && x < 3 * h && y > 0 && y < h);
    let insideVertical = (x > h && x < 2 * h & y > h && y < 4 * h);
    let common = (x > h && x < h * 2 && y == h);
    if (figureHorInBorder || figureVertInBorder) { //определяме целия обхват на фогурата вкл. inside i border
        if (insideHorizontal || insideVertical || common) {
            console.log("inside");
        } else {
            console.log("border");
        }
    } else {
        console.log("outside");
    }
}
pointInFigure(["2", "3", "10"]); // outside
pointInFigure(["2", "3", "1"]); // inside
pointInFigure(["2", "2", "2"]); // border
pointInFigure(["2", "6", "0"]); // border
pointInFigure(["2", "0", "6"]); // outside
pointInFigure(["15", "13", "55"]); // outside
pointInFigure(["15", "30", "0"]); // border*/
pointInFigure(["10", "10", "30"]); // border
pointInFigure(["15", "-4", "7"]); // inside
pointInFigure(["10", "20", "-5"]); // outside