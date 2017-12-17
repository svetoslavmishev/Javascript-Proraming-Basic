function equalWords([arg1, arg2]) {
    let firstWord = arg1.toLowerCase();
    let secondWord = arg2.toLowerCase();
    if (firstWord == secondWord) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
equalWords(["hello", "hello"]);