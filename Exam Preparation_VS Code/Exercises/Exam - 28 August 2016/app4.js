function hospital(args) {
    let period = Number(args[0]);
    let treatedPatients = 0;
    let untreatedPatients = 0;
    let doctors = 7;
    if (period > 0 && period <= 1000) {
        for (let i = 1; i <= period; i++) {
            let patientsPerDay = Number(args[i]);
            if (i % 3 == 0 && treatedPatients < untreatedPatients) { // за всеки трети ден докторите++, следователно i % 3 == 0, а не i == 3???
                doctors++;
            }
            if (patientsPerDay > doctors) {
                treatedPatients += doctors;
                untreatedPatients += patientsPerDay - doctors;
            } else {
                treatedPatients += patientsPerDay;
            }
        }
        console.log(`Treated patients: ${treatedPatients}.`);
        console.log(`Untreated patients: ${untreatedPatients}.`);
    }
}
hospital(["4", "7", "27", "9", "1"]);
hospital(["6", "25", "25", "25", "25", "25", "2"]);
hospital(["3", "7", "7", "7"]);
hospital(["9", "25", "25", "25", "25", "25", "25", "25", "25", "25"]); // 75 na 150