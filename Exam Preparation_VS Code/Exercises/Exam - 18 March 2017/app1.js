function dogHouse([arg1, arg2]) {
    let a = Number(arg1);
    let b = Number(arg2);
    let leftAndRightSide = a * (a / 2) * 2;
    let backSideSquare = a / 2 * a / 2;
    let backSideTriangle = (a / 2 * (b - a / 2)) / 2;
    let totalBackSide = backSideSquare + backSideTriangle;
    let entrance = a / 5 * a / 5;
    let frontSide = totalBackSide - entrance;
    let houseSides = leftAndRightSide + totalBackSide + frontSide;
    let roof = a * (a / 2) * 2;
    console.log((houseSides / 3).toFixed(2));
    console.log((roof / 5).toFixed(2));
}
dogHouse(["6", "10"]);
dogHouse(["10.25", "15.45"]);