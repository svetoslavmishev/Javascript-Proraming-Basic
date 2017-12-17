function cinema([arg1, arg2, arg3]) {
    let projection = arg1.toLowerCase();
    let rows = Number(arg2);
    let colums = Number(arg3);
    let price = 0;
    let seats = rows * colums;
    switch (projection) {
        case "premiere":
            price = 12.00
            break;
        case "normal":
            price = 7.50
            break;
        case "discount":
            price = 5.00
            break;
        default:
            break;
    }
    console.log((seats * price).toFixed(2) + " leva");
}
cinema(["Premiere", "10", "12"]);
cinema(["Normal", "21", "13"]);
cinema(["Discount", "12", "30"]);