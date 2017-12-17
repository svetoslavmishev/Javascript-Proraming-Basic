function daysOfWeek([arg1, arg2]) {
    let num = Number(arg1);
    let days = " "; // може да се инициализира и конкретен ден Пример: "Momday"
    if (num >= 1 && num <= 7) {
        switch (num) {
            case 1:
                days = "Monday"
                break;
            case 2:
                days = "Tuesday"
                break;
            case 3:
                days = "Wednesday"
                break;
            case 4:
                days = "Thursday"
                break;
            case 5:
                days = "Friday"
                break;
            case 6:
                days = "Saturday"
                break;
            case 7:
                days = "Sunday"
                break;
            default:
                break; // не е задължително да има
        }
    } else {
        console.log("error");
    }
    console.log(days);
}
daysOfWeek(["1"]);
daysOfWeek(["2"]);
daysOfWeek(["3"]);
daysOfWeek(["-1"]);