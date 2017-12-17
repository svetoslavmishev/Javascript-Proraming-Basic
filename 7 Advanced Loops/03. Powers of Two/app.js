function powersOfTwo([arg1]) {
    let n = Number(arg1);
    for (let i = 0; i <= n; i++) {
        console.log(Math.pow(2, i));
    }
}
// powersOfTwo(["5"]);
powersOfTwo(["10"]);