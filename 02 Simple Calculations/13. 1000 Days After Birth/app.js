function addDays(date) {
    let dateArray = date.split('-');
    let dateObject = new Date(dateArray[2] + '-' + dateArray[1] + '-' + dateArray[0]);
    dateObject.setDate(dateObject.getDate() + 999);
    let finalDate = new Date(dateObject.toISOString());
    let finalMonth = finalDate.getMonth() + 1;
    /*let dateString = ((finalDate.getDate() < 10) ? "0" + finalDate.getDate() : finalDate.getDate()) + "-" +
        ((finalMonth < 10) ? "0" + finalMonth : finalMonth) + "-" + finalDate.getFullYear();
    */
    //let dateString = finalDate.getDate() + "-" + finalMonth + "-" + finalDate.getFullYear();
    let outputDay = getDayAndMonth(finalDate.getDate());
    let outputMonth = getDayAndMonth(finalMonth);
    let outputYear = finalDate.getFullYear();
    function getDayAndMonth(day) {
        if (day < 10) {
            return "0" + day;
        } else {
            return day
        }

    }
    let dateString = outputDay + "-" + outputMonth + "-" + outputYear;
    /*if (finalDate.getDate() < 10) {
        dateString = "0" + finalDate.getDate() + "-" + finalMonth + "-" + finalDate.getFullYear();
    }
    if (finalDate.getMonth() < 10) {
        dateString = finalDate.getDate() + "-" + "0" + finalMonth + "-" + finalDate.getFullYear();
    }
    if (finalDate.getDate() < 10 && finalDate.getMonth() < 10) {
        dateString = "0" + finalDate.getDate() + "-" + "0" + finalMonth + "-" + finalDate.getFullYear();
    }*/
    console.log(dateString);
}
addDays('?25-02-1995');
addDays('?07-11-2003');
addDays('?30-12-2002');
addDays('?01-01-2012');
addDays('?14-06-1980');