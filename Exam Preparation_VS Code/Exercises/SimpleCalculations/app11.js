function usdToBGN([arg1]) {
    let usd = Number(arg1);
    let lev = usd * 1.79549;
    console.log(`${lev.toFixed(2)} BGN`);
}
usdToBGN(["20.2"]);
usdToBGN(["100"]);
usdToBGN(["12.5"]);