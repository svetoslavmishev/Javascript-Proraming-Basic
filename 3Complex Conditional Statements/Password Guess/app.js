function guessPassword([arg1]) {
    let password = arg1;
    if (password == "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}
guessPassword(["s3cr3t!P@ssw0rd"]);
guessPassword(["qwerty"]);
guessPassword(["s3cr3t!p@ss"]);