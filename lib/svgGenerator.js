const fs = require("fs");

function createSvg(shape){
    const svgTxt = shape.createShape();
    fs.writeFile("logo.svg", svgTxt, () => {
        console.log("It's done");
    });
}

module.exports = { createSvg};