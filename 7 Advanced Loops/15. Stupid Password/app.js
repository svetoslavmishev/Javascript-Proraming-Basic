function stupidPasword([arg1, arg2]) {
    let n = Number(arg1);
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
    let l = Number([arg2 - 1]);
    let result = "";

    for (let p1 = 1; p1 <= n; p1++) {
        for (let p2 = 1; p2 <= n; p2++) {
            for (let p3 = 0; p3 <= l; p3++) {
                for (let p4 = 0; p4 <= l; p4++) {
                    let finalIndex = Math.max(p1, p2) + 1;
                    for (let p5 = finalIndex; p5 <= n; p5++) {
                        let str = "" + p1 + p2 + alphabet[p3] + alphabet[p4] + p5 + " ";
                        result += str;
                    }
                }
            }
        }
    }
    console.log(result);
}

stupidPasword(["3", "4"]);