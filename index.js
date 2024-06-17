const inquirer = require("inquirer");
const fs = require("fs");

const questions = [ 
    {
        type: "input",
        message: "Enter text for logo. (Must not be more than 3 characters.)",
        name: "text",
        validate: (value) => {
            if (value.length <= 3) {
                return true; 
            }else {
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


function init () {
inquirer.prompt(questions).then((response) => {
    const markdownText = generateMarkdown(response)
    writeToFile("logo.svg", markdownText);
})};


init();