function photoPictures([arg1, arg2, arg3]) {
    let numberOfPictures = Number(arg1);
    let typeOfPictures = arg2;
    let typeOfOrder = arg3;
    let price = 0;
    if (typeOfPictures == "9X13") {
        if (numberOfPictures < 50) {            
        price = 0.16 * numberOfPictures;
        } else if (numberOfPictures >= 50) {
            price = 0.16 * numberOfPictures * 0.95;
        }
    } else if (typeOfPictures == "10X15") {
        if (numberOfPictures < 80) {
            price = 0.16 * numberOfPictures;
        } else if (numberOfPictures >= 80) {
            price = 0.16 * numberOfPictures * 0.97;
        }
    } else if (typeOfPictures == "13X18") {
        if (numberOfPictures < 50) {
            price = 0.38 * numberOfPictures;
        } else if (numberOfPictures >= 50 && numberOfPictures <=100) {
            price = 0.38 * numberOfPictures * 0.97;
        } else if (numberOfPictures > 100) {
            price = 0.38 * numberOfPictures * 0.95;
        }
    } else if (typeOfPictures == "20X30") {
        if (numberOfPictures < 10) {
            price = 2.90 * numberOfPictures;
        } else if (numberOfPictures >= 10 && numberOfPictures <=50) {
            price = 2.90 * numberOfPictures * 0.93;
        } else if (numberOfPictures > 50) {
            price = 2.90 * numberOfPictures * 0.91;
        }
    }
    if (typeOfOrder == "online") {
        price *= 0.98;
    }
    console.log(`${price.toFixed(2)}BGN`);
}
photoPictures(["5", "9X13", "online"]);
photoPictures(["105", "20X30", "office"]);