function hello([args1]) {
    let name = Number(args1);
    let greeting = "Hello, " + args1 + "!";
    console.log(greeting);
}
hello(["Pesho"]);