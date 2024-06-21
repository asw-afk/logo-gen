const fs = require("fs");

function createSvg(shape) {
//   const svgTxt = shape.createShape();
  fs.writeFile("logo.svg", shape, () => {
    console.log("It's done");
  });
}

module.exports = { createSvg };
