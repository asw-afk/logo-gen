const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shape");
const Whatever = require("./lib/text");

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
  questions()
    .then((answers) => {
   
      let svgShape;

      //An else if statement that graps user input and returns the corresponding string based on their choice
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
      //After the shape string is returned this sets the color of it based on their color input
      svgShape.setColor(answers.color);

      //This passes the text class into a variable we can use
      let whatever = new Whatever();


      //This sets the entries onto our new Text to the corresponding user input.

      //This will set our Logo's three letters and colors
      whatever.setText( answers.text, answers.textColor);
      //This will set the correct shape string into our Text string by using svgShape as a parameter
      whatever.setShape(svgShape);
      console.log("SVG generated");
      fs.writeFile("logo.svg", whatever.render(), (err) => err && console.error);
    })
    .catch((err) => {console.log(err)});
};

init();
