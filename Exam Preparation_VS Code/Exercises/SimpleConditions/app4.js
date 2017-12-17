function greaterNumber([arg1, arg2]) {
    let a = Number(arg1);
    let b = Number(arg2);
    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
    // console.log(Math.max(a,b));    
}
greaterNumber(["5", "-5"]); 
greaterNumber(["3", "6"]);    