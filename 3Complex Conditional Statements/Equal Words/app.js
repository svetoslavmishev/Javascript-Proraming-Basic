function equalWords([arg1, arg2]) {
    let firstWord = (arg1).toLowerCase(); 
    let secondWord = (arg2).toLowerCase();
    if (firstWord == secondWord) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
equalWords(["Hello", "Hello"]);
equalWords(["SoftUni", "softuni"]);
equalWords(["Soft", "Uni"]);
equalWords(["beer", "vodka"]);
equalWords(["HeLlO", "hELLo"]);

/*
// ako .toLowercase() go nqma sravnqva malki i golemi bukvi.
S nego vsichki bukvi stavat malki i ne se vzima pod vnimanie
dali vhoda e s malki i golemi bukvi.
*/