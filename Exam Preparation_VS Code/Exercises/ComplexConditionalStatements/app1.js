function personalTitles([arg1, arg2]) {
    let age = Number(arg1);
    let title = arg2;
    let result = "";
    if (title == "m") {
        if (age >= 16) {
            result = "Mr.";
        } else {
            result = "Master";
        }
    } else if (title == "f") {
        if (age >= 16) {
            result = "Ms.";
        } else {
            result = "Miss";
        } 
    } 
    console.log(result);
}
personalTitles(["12", "f"]);
personalTitles(["17", "m"]);
personalTitles(["25", "f"]);
personalTitles(["13.5", "m"]);