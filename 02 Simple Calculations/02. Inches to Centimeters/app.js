function inchesToCentimetres([arg1]) {
    let inches = parseFloat(arg1);   
    let centimetres = inches * 2.54; //променливиата е декларирана и не е нужно;
    console.log("centimetres = " + centimetres);
}
inchesToCentimetres(["5"]);