const inquirer = require("inquirer");
const fs = require("fs");
const { createSvg } = require("./lib/svgGenerator");
const { Triangle, Circle, Square } = require("./lib/shape");

const questions = [
  {
    type: "input",
    message: "Enter text for logo. (Must not be more than 3 characters.)",
    name: "text",
    validate: (value) => {
      if (value.length <= 3) {
        return true;
      } else {
        return "stahp";
      }
    },
  },
  {
    type: "list",
    message: "What shape do you want?",
    name: "shape",
    choices: ["triangle", "circle", "square"],
  },
  {
    type: "input",
    message: "Select a color",
    name: "color",
  },
];

function init() {
  inquirer.prompt(questions).then((answers) => {
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

    // switch (answers.shape) {
    //   case "triangle":
    //     svgShape = new Triangle();
    //     break;
    //   case "circle":
    //     svgShape = new Circle();
    //     break;
    //   case "square":
    //     svgShape = new Square();
    //     break;
    //   default:
    //     console.log("shape not recognized");
    //     break;
    // }

    svgShape.setColor(answers.color);

    createSvg(svgShape.render());
    // fs.writeFile("logo.svg", makeSvg);
  });
}

init();
