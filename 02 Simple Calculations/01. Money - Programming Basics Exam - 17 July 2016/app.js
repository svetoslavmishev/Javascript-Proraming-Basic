function pesho([arg1, arg2, arg3]) {
    let bitcoin = Number(arg1) * 1168;
    let iuan = parseFloat(arg2);
    let commission = parseFloat(arg3) / 100;
    let iuanLevs = (iuan * 0.15) * 1.76;
    let totalLevs = iuanLevs + bitcoin;
    let totalEuro = totalLevs / 1.95;
    console.log((totalEuro - totalEuro * commission).toFixed(2));

}
pesho(["1", "5", "5"]);
pesho(["20", "5678", "2.4"]);