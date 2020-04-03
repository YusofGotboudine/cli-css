console.log("Wazza Ma Nodeeeeee!!");

console.log(process.argv);

function inputCheck(stringA) {
    if (stringA == "hex") {
        hexToRgbNew(process.argv[3]);
        console.log("rgb(" + hexToRgbNew(process.argv[3]) + ")");
    } else if (stringA == "rgb") {
        console.log(componentToHex(process.argv[3]));
        console.log(componentToHex(process.argv[4]));
        console.log(componentToHex(process.argv[5]));
        console.log(rgbToHex(process.argv[3], process.argv[4], process.argv[5]));
    } else {
        console.log("Invalid Input");
    };
};

inputCheck(process.argv[2]);

function hexToRgbNew(hex) {
    var arrBuff = new ArrayBuffer(4);
    var vw = new DataView(arrBuff);
    vw.setUint32(0, parseInt(hex, 16), false);
    var arrByte = new Uint8Array(arrBuff);

    return arrByte[1] + "," + arrByte[2] + "," + arrByte[3];
};

// console.log("rgb(" + hexToRgbNew(process.argv[2]) + ")");
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
// console.log(rgbToHex(process.argv[3], process.argv[4], process.argv[5]));