function triangleOfDollars(arg1) {
    let n = Number(arg1);
    let result = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            result += "$ ";
        }
        console.log(result);
        result = "";
    }

    /*    for (let i = 0; i < n; i++) {  // без вложен цикъл. Изпълнява се ред по ред
            console.log("$ ".repeat(i));
        }
        */
}
//triangleOfDollars("5");
//triangleOfDollars("3");
//triangleOfDollars("4");
triangleOfDollars("5");