function squareOfStars([arg1]) {
    let n = Number(arg1);
    let result = "";

    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= n; col++) {
            result += "* ";
        }
        console.log(result);
        result = "";
    }

    /*    for (let i = 1; i <= n; i++) { // може да се реши и без вложен цикъл
            console.log("* ".repeat(n));
        }*/

}
//squareOfStars("2");
//squareOfStars("3");
squareOfStars("4");