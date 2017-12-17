function scholarship([arg1, arg2, arg3]) {
    let profitInLevs = Number(arg1);
    let averageGrade = Number(arg2);
    let minimalSalary = Number(arg3);
    let socialScholarship = 0.35 * minimalSalary;
    let excelentScholarship = 25 * averageGrade;

    if (excelentScholarship >= 5.5) {
        if (excelentScholarship >= socialScholarship) {
            console.log(`You get a scholarship for excellent results ${Math.floor(excelentScholarship)} BGN`);
        }
    }
    if (profitInLevs = < minimalSalary && averageGrade > 4.5) {
        if (socialScholarship > excelentScholarship) {
            console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
        }
    } else {
        console.log(`You cannot get a scholarship!`);
    }
}
scholarship(["480.00", "4.60", "450.00"]);
scholarship(["300.00", "5.65", "420.00"]);