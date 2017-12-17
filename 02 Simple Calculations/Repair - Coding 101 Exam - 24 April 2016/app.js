function repair([arg1, arg2, arg3, arg4, arg5]) {
    let area = Number(arg1);
    let a = Number(arg2);
    let b = Number(arg3);
    let widthBench = Number(arg4);
    let longBench = Number(arg5);
    let totalArea = arg1 * arg1 - widthBench * longBench;
    let plate = a * b;
    let time = totalArea / plate * 0.2;
    console.log((totalArea / plate).toFixed(2));
    console.log((time).toFixed(2));
}
repair(["20", "5", "4", "1", "2"]);
repair(["40", "0.8", "0.6", "3", "5"]);