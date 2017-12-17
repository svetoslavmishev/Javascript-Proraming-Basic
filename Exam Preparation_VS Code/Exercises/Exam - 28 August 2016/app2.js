function firm([arg1, arg2, arg3]) {
    let hours = parseInt(arg1);
    let days = parseInt(arg2);
    let staffWorkingOvertime = parseInt(arg3);
    let daysForEducation = days * 0.1;
    let workingDays = (days - daysForEducation) * 8;
    let overtime = staffWorkingOvertime * days * 2;
    let totalWorkingTime = Math.floor(workingDays + overtime);
    if (totalWorkingTime >= hours) {
        console.log(`Yes!${totalWorkingTime - hours} hours left.`);
    } else {
        console.log(`Not enough time!${hours - totalWorkingTime} hours needed.`);
    }
}
firm(["90", "7", "3"]);
firm(["99", "3", "1"]);
firm(["50", "5", "2"]);