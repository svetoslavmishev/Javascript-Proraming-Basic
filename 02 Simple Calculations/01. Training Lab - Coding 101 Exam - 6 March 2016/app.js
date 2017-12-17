function classRoom([arg1, arg2]) {
    let a = Number(arg1);
    let b = Number(arg2);
    let workLong = parseInt(a / 1.2);
    let workWidth = parseInt((b - 1) / 0.7);
    console.log(workLong * workWidth - 3);
}
classRoom(["15", "8.9"]);
classRoom(["8.4", "5.2"]);