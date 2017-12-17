
function rectangle([arg1]) {
    let n = Number(arg1);
    let result = "";

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result += "*";
        }
        console.log(result);
        result = "";                  // занулява result иначе ще долепи и предходните стрингове
    }

 /*   for (let i = 1; i <= n; i++) { // разделяме на две часи. Първия пази променливата а втория печата
        result += " *";
    }

    for (let i = 1; i <= n; i++) {
        console.log(result);
    }*/

    /* може да се реши без вложен цикъл
    function rectangleOfN([arg1]) {
        let n = Number(arg1);
    
        for (let i = 1; i <= n; i++) {
            console.log("*".repeat(n));
        }
    }*/

}
//rectangle("2");
rectangle("3");
