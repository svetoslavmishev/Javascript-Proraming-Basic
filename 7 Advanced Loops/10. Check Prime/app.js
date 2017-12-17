function checkPrime([arg1]) {
    let n = Number(arg1);
    let isPrime = true;

    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (n < 2) {
        isPrime = false;
    }
    if (isPrime) {
        console.log("Prime");
    } else {
        console.log("Not Prime");
    }
}
// checkPrime("99");
checkPrime(["1"]);
// checkPrime("-1");