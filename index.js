const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shape");
const { textInput} = require("./lib/text");

const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "Enter text for logo. (Must not be more than 3 characters.)",
      name: "text",
      //if they enter in more than three characters this will stop it
      validate: (value) => {
        if (value.length <= 3) {
          return true;
        } else {
          return "Please enter only three letters.";
        }
      },
    },
    {
      type: "input",
      message: "What text color do you want?",
      name: "textColor",
    },
    {
      type: "list",
      message: "What shape do you want?",
      name: "shape",
      choices: ["triangle", "circle", "square"],
    },
    {
      type: "input",
      message: "Select a shape color",
      name: "color",
    },
  ]);
};

const init = () => {
  questions().then((answers) => {
    let text;
    let svgShape;

    if (answers.shape === "triangle") {
      svgShape = new Triangle();
    } else if (answers.shape === "circle") {
      svgShape = new Circle();
    } else if (answers.shape === "square") {
      svgShape = new Square();
    } else {
      console.log("shape not recognized");
      return;
    }
    svgShape.setColor(answers.color);

    if (answers.text !== 0) {
      text = new textInput();
    } else {
      return;
    }

    text.setTextColor(answers.color);
console.log("got to text color")

    function renderSVG(Data) {
      fs.writeFile("logo.svg", init(Data), () => {
        console.log("gjmsdrfg");
      })
    }


  renderSVG();

  });
};

init();
