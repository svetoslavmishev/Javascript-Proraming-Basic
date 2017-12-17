function magicNumber([arg1]) {
    let n = Number(arg1);
    let result = "";
    for (let n1 = 0; n1 <= 9; n1++) {
        for (let n2 = 0; n2 <= 9; n2++) {
            for (let n3 = 0; n3 <= 9; n3++) {
                for (let n4 = 0; n4 <= 9; n4++) {
                    for (let n5 = 0; n5 <= 9; n5++) {
                        for (let n6 = 0; n6 <= 9; n6++) {
                            if (n1 * n2 * n3 * n4 * n5 * n6 == n) {
                                result += "" + n1 + n2 + n3 + n4 + n5 + n6 + " ";
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(result);
}
// magicNumber(["2"]);
// magicNumber(["8"]); 
magicNumber(["531441"]); 