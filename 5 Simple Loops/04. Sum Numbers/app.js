function sumNumbers(args) {
  let n = Number(args[0]);
  let sum = 0;
  for (i = 1; i <= n; i++) {
    let currentNums = Number(args[i]);
    sum += currentNums;
  }
  console.log(sum);
}
sumNumbers(["2", "10", "20"]);
sumNumbers(["3", "-10", "-20", "-30"]);
sumNumbers(["4", "45", "-20", "7", "11"]);