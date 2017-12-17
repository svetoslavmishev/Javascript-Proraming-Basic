function grades(args) {
    let numberOfStudents = Number(args[0]);
    let average = 0;
    let countFail = 0;
    let countTop = 0;
    let count3To4 = 0;
    let count4To5 = 0;
    for (let i = 1; i <= numberOfStudents; i++) {
        let currentGrade = Number(args[i])
        if (currentGrade >= 2 && currentGrade <= 2.99) {
            countFail++;
        } else if (currentGrade >= 3 && currentGrade <= 3.99) {
            count3To4++;
        } else if (currentGrade >= 4 && currentGrade <= 4.99) {
            count4To5++;
        } else if (currentGrade >= 5) {
            countTop++;
        }
        average += currentGrade / numberOfStudents;
    }
    console.log(`Top students: ${(countTop / numberOfStudents * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(count4To5 / numberOfStudents * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(count3To4 / numberOfStudents * 100).toFixed(2)}%`);
    console.log(`Fail: ${(countFail / numberOfStudents * 100).toFixed(2)}%`);
    console.log(`Average: ${average.toFixed(2)}`);
}
grades(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);
grades(["6", "2", "3", "4", "5", "6", "2.2"]);