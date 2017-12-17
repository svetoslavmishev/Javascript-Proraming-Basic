function rectangleOf10() {
    let result = "";

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            result += "*";
        }
        console.log(result);
        result = ""; // занулява result иначе ще долепи и предходните стрингове
    }

    /*може да се реши и без вложен цикъл    
        for (let i = 1; i <= 10; i++){
            console.log("*".repeat(10));
        }*/

}
rectangleOf10("3");