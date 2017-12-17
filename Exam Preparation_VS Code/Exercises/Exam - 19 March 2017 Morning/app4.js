function trainersSalary(args) {
    let lections = Number(args[0]);
    let budget = Number(args[1]);
    let counterRoli = 0;
    let counterTrofon = 0;
    let others = 0;
    let counterJelev = 0;
    let counterRoYaL = 0;
    let counterSino = 0;
    let moneyPerLection = budget / lections;
    for (let i = 0; i < args.length; i++) {
        let currentLector = args[i];
        if (currentLector == "Roli") {
            counterRoli++;
        } else if (currentLector == "Trofon") {
            counterTrofon++;
        } else if (currentLector == "Jelev") {
            counterJelev++;
        } else if (currentLector == "RoYaL") {
            counterRoYaL++;
        } else if (currentLector == "Sino") {
            counterSino++;
        } // другите лектори могат да бъдат с различни имена Бай Иван Гошо и затова от общите часове вадим тези
        // на лекторите, които знаем и ги умножаваме по цена на 1 лекция.
    }
    let different = lections - counterRoli - counterTrofon - counterJelev - counterRoYaL - counterSino;
    console.log(`Jelev salary: ${(counterJelev * moneyPerLection).toFixed(2)} lv`);
    console.log(`RoYaL salary: ${(counterRoYaL * moneyPerLection).toFixed(2)} lv`);
    console.log(`Roli salary: ${(counterRoli * moneyPerLection).toFixed(2)} lv`);
    console.log(`Trofon salary: ${(counterTrofon * moneyPerLection).toFixed(2)} lv`);
    console.log(`Sino salary: ${(counterSino * moneyPerLection).toFixed(2)} lv`);
    console.log(`Others salary: ${(different * moneyPerLection).toFixed(2)} lv`);
}
// trainersSalary(["9", "1500", "Roli", "Trofon", "Sino", "Bai Ivan Ivanov", "Jelev", "Trofon", "Sino", "Sino", "RoYaL"]);
// trainersSalary(["4", "750.50", "Bai Ivan Ivanov", "Bai Ivan Ivanov", "Bai Ivan Ivanov", "Roli"]);
trainersSalary(["2", "150", "Roli", "Kolio"]);
