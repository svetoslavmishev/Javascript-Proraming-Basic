function usdToBGN([arg1]) {
    let dollars = parseFloat(arg1);
    let levs = dollars * 1.79549;
    console.log(levs.toFixed(2) + " BGN");
}
usdToBGN(["20"]);
usdToBGN(["100"]);
usdToBGN(["12.5"]);