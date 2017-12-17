function smallShop([arg1, arg2, arg3]) {
    let product = arg1;
    let town = arg2;
    let quantity = Number(arg3);
    if (town == "Sofia") {
        if (product == "coffee") {
            console.log(0.5 * quantity);
        } else if (product == "water") {
            console.log(0.8 * quantity);
        } else if (product == "beer") {
            console.log(1.2 * quantity);
        } else if (product == "sweets") {
            console.log(1.45 * quantity);
        } else if (product == "peanuts") {
            console.log(1.6 * quantity);
        }
    } else if (town == "Plovdiv") {
        if (product == "coffee") {
            console.log(0.4 * quantity);
        } else if (product == "water") {
            console.log(0.7 * quantity);
        } else if (product == "beer") {
            console.log(1.15 * quantity);
        } else if (product == "sweets") {
            console.log(1.3 * quantity);
        } else if (product == "peanuts") {
            console.log(1.5 * quantity);
        }
    } else if (town == "Varna") {
        if (product == "coffee") {
            console.log(0.45 * quantity);
        } else if (product == "water") {
            console.log(0.7 * quantity);
        } else if (product == "beer") {
            console.log(1.1 * quantity);
        } else if (product == "sweets") {
            console.log(1.35 * quantity);
        } else if (product == "peanuts") {
            console.log(1.55 * quantity);
        }
    }
}
smallShop(["sweets", "Sofia", "2.23"]);
smallShop(["coffee", "Varna", "2"]);