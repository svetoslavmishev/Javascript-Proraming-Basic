function danceHall([arg1, arg2, arg3]) {
    let l = Number(arg1) * 100;
    let w = Number(arg2) * 100;
    let a = Number(arg3) * 100;
    let dancerAreaSquareCentimetres = 40;
    let areaForDancingSquareCentimetres = 7000;
    let hallAreaSquareCentimetres = w * l;
    let wardrobeSquareCentimetres = a * a;
    let benchSquareCentimetres = hallAreaSquareCentimetres / 10;
    let freeArea = hallAreaSquareCentimetres - wardrobeSquareCentimetres - benchSquareCentimetres;
    let numberOfDancers = freeArea / (dancerAreaSquareCentimetres + areaForDancingSquareCentimetres);
    console.log(Math.floor(numberOfDancers));
}
danceHall(["50", "25", "2"]);
danceHall(["70", "20", "4"]);
