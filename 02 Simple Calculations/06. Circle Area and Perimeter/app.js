function circleAreaPerimeter([arg1]) {
    let r = Number(arg1); 
    let area = Math.PI * r * r;
    let perimeter = 2 * Math.PI * r;
    console.log(`Area = ${area }`);
    console.log(`Perimeter = ${perimeter}`);
    let squareRadius = Math.pow(r, 2);
    console.log(`SquareRadius = ${squareRadius}`);

}
circleAreaPerimeter(["3"]);
// area = Math.PI * r * r
// perimeter = 2 * Math.PI * r