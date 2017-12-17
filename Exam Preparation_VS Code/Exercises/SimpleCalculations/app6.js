function circleAreaPerimeter([arg1]) {
    let r = Number(arg1);
    let area = Math.PI * r * r;
    let perimeter = 2 * Math.PI * r;
    console.log(`Area = ${area}`);
    console.log(`Perimeter = ${perimeter}`);
}
circleAreaPerimeter(['3']);