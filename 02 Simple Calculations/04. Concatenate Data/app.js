function concatenateData([arg1, arg2, arg3, arg4]) {
    let firstName = arg1;
    let lastName = arg2;
    let age = parseInt(arg3); //?
    let town = arg4;
    console.log("You are " + firstName + " " + lastName + ", a " + age + "-years old person from " + town + ".");
}
concatenateData(["Svetoslav", "Mishev", "32", "Lovech"]);


//�You are <firstName> <lastName>, a <age>-years old person from <town>�.

// Vsial Studio CTRL+K+D