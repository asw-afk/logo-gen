const inquirer = require("inquirer");
const fs = require("fs");

const questions = [ 
    {
        type: "list",
        message: "What shape do you want?",
        name: "shape",
        choices: ["triangle", "circle", "square"],
    },
    {
        type: "list", 
        message: "Select a color",
        name: "colors",
        choices: ["red", "green", "blue"],
    },
]