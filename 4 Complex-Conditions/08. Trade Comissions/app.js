function tradeComissions([arg1, arg2]) {
    let town = arg1.toLowerCase();
    let sales = Number(arg2);
    let comission = -1.0;
    if (town == "sofia") {
        if (sales >= 0 && sales <= 500) {
            comission = 0.05;
        } else if (sales >= 500 && sales <= 1000) {
            comission = 0.07;
        } else if (sales >= 1000 && sales <= 10000) {
            comission = 0.08;
        } else if (sales >= 1000) {
            comission = 0.12;
        }
    } else if (town == "varna") {
        if (sales >= 0 && sales <= 500) {
            comission = 0.045;
        } else if (sales >= 500 && sales <= 1000) {
            comission = 0.075;
        } else if (sales >= 1000 && sales <= 10000) {
            comission = 0.10;
        } else if (sales >= 1000) {
            comission = 0.13;
        }
    } else if (town == "plovdiv") {
        if (sales >= 0 && sales <= 500) {
            comission = 0.055;
        } else if (sales >= 500 && sales <= 1000) {
            comission = 0.08;
        } else if (sales >= 1000 && sales <= 10000) {
            comission = 0.12;
        } else if (sales >= 1000) {
            comission = 0.145;
        }
    }
    if (comission >= 0) {
        console.log((sales * comission).toFixed(2));
    } else {
        console.log("error");
    }
}
tradeComissions(["Sofia", "1500"]);
tradeComissions(["Plovdiv", "499.99"]);
tradeComissions(["Varna", "3874.50"]);
tradeComissions(["Kaspichan", "-50"]);