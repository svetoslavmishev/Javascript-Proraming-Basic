function triangleArea([arg1, arg2]) {
    let a = Number(arg1);
    let h = Number(arg2);
    let area = a * h / 2;
    console.log(`Triangle area = ${area.toFixed(2)}`);
}
triangleArea(["20", "30"]);