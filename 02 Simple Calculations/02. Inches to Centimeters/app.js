function inchesToCentimetres([arg1]) {
    let inches = parseFloat(arg1);   
    let centimetres = inches * 2.54; //������������� � ����������� � �� � �����;
    console.log("centimetres = " + centimetres);
}
inchesToCentimetres(["5"]);