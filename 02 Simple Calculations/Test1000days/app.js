function addDays(date) {
    let dateArray = date.split('-');
    let dateInMiliseconds = new Date(dateArray[2] + '-' + dateArray[1] +
        '-' + dateArray[0]).getTime() + 999 * 86400000;
    let finalDate = new Date(dateInMiliseconds);
    let finalMonth = finalDate.getMonth() + 1;
    /*let myDateString = (finalDate.getDate() < 10) ? '0' + finalDate.getDate() : finalDate.getDate() +
        '-' + (finalMonth.getMonth() < 10) ? '0' + finalMonth.getMonth() : finalMonth.getMonth() +
        '-' + finalDate.getFullYear()*/
    console.log(myDateString);
}
addDays('?25-02-1995');
addDays('?07-11-2003');
addDays('?30-12-2002');
addDays('?01-01-2012');
addDays('?14-06-1980');
/*
20 - 11 - 1997
02 - 08 - 2006
24 - 09 - 2005
26 - 09 - 2014
10 - 03 - 1983
*/