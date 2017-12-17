function distance([arg1, arg2, arg3, arg4]) {
    let speedKilometresPerHour = Number(arg1);
    let firstTimeHours = Number(arg2) / 60;
    let secondTimeHours = Number(arg3) / 60;
    let thirdTimeHours = Number(arg4) / 60;
    let startDistance = speedKilometresPerHour * firstTimeHours;
    let startdistance = speedKilometresPerHour * firstTimeHours
    let increase = (speedKilometresPerHour * 1.1) * secondTimeHours;
    let decrease = (speedKilometresPerHour * 1.1) * 0.95 * thirdTimeHours;
    let totalKilimeters = startDistance + increase + decrease;
    console.log(totalKilimeters.toFixed(2));
}
distance(["90", "60", "70", "80"]);
distance(["140", "112", "75", "190"]);