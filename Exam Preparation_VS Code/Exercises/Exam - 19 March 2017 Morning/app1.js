function housePainting([arg1, arg2, arg3]) {
    let x = Number(arg1);
    let y = Number(arg2);
    let h = Number(arg3);
    let frontSideHouse = x * x - 2.4;
    let backSideHouse = x * x;
    let bothSideHouse = 2 * (x * y) - 4.5;
    let totalSidesHouse = frontSideHouse + backSideHouse + bothSideHouse;
    let roofRectangle = 2 * x * y;
    let roofTriangle = 2 * (x * h / 2);
    let totalRoofHouse = roofRectangle + roofTriangle;
    console.log((totalSidesHouse/3.4).toFixed(2));
    console.log((totalRoofHouse/4.3).toFixed(2));
}
// housePainting(["6", "10", "5.2"]);
housePainting(["10.25", "15.45", "8.88"]);