function daysOnEarth([arg1]) {
    let dateParts = arg1.split("-");
    let formatDate = new Date(dateParts[2] + "-" + dateParts[1] + "-" + dateParts[0]).getTime() + 999 * 86400000;
    let dateAfter1000days = new Date(formatDate);
    let dayString = dateAfter1000days.getDate() < 10 ? "0" + dateAfter1000days.getDate() : dateAfter1000days.getDate();
    let month = dateAfter1000days.getMonth() + 1; // месеците са zero-based (0 е януари, а 11 е декември)
    let monthString = month < 10 ? "0" + month : month;
    console.log(dayString + "-" + monthString + "-" + dateAfter1000days.getFullYear());
}
daysOnEarth(["25-02-1995"]);
daysOnEarth(["07-11-2003"]);
daysOnEarth(["30-12-2002"]);
daysOnEarth(["01-01-2012"]);
daysOnEarth(["14-06-1980"]);