function trapecoidArea([arg1, arg2, arg3]) {
    let a = Number(arg1);
    let b = Number(arg2);
    let h = Number(arg3);
    let area = Number((a + b) * h) / 2;
    console.log(area);
}
trapecoidArea(["8", "13", "7"]);