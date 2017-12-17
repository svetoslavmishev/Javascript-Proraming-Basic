function numberToText([arg1]) {
    let num = parseInt(arg1);
    let result = '';
    switch (num) {
        case 1: result = "one"; break;
        case 2: result = "two"; break;
        case 3: result = "three"; break;
        case 4: result = "four"; break;
        case 5: result = "five"; break;
        case 6: result = "six"; break;
        case 7: result = "seven"; break;
        case 8: result = "eight"; break;
        case 9: result = "nine"; break;
        default: result = "number too big"; break;
    }
    console.log(result);
}
// numberToText(['1']);
// numberToText(['6']);
// numberToText(['9']);
numberToText(['10']);