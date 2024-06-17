const inquirer = require("inquirer");
const fs = require("fs");
const { createSvg } = require("./lib/svgGenerator");

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
    name: "colors",
  },
];

function init() {
  inquirer.prompt(questions).then((data, response) => {
    if (data.shape === "triangle") {
      data.shape =
        "<polygon points=150,0 300,300 0,300 style=fill:${this.color} />";
    } else {
        return false
    }

      const makeSvg = createSvg(response);
      writeFile("logo.svg", makeSvg);
    }
  )};

init();
