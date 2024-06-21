class Text {
  constructor(text, textColor) {
    this.text = text;
    this.textColor = textColor;
  }
  setTextColor(textColor) {
    this.textColor = textColor;
  }
}

class textInput extends Text {
  render() {
    return (
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">` +
      `${shape}` +
      ` <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    );
  }
}

// function generateSVG({text, color, shape}) {
//     const svgIntro =
//     `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`

//     const svgOutro =  ` <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`

//   fs.writeFile("logo.svg", shape) () => {
//     console.log("SVG Generated");
//   }

// };

// const  = ({text, color}) =>

// const svgIntro =
//     `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`

// const svgOutro = ({text, color}) => ` <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>

// </svg>`

module.exports = { textInput, Text };
