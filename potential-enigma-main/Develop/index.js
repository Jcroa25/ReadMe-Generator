// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const {writeFile} = require('fs').promises;
const generateMarkdown = require('.utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },

    {
        type: "input",
        message:"What is the description of your project?",
        name: "description",
    },

    {
        type: "input",
        message:"What are the steps for installation to your project?",
        name: "installation",
    },

    {
        type: "input",
        message:"How will you use the program for your project?",
        name: "usage",
    },

    {
        type: "input",
        message:"Who/what are the contributions to ",
        name: "contributions",
    },

    {
        type: "input",
        message:"What is the Title of your project?",
        name: "title",
    },

    {
        type: "input",
        message:"What is the Title of your project?",
        name: "title",
    },

    {
        type: "input",
        message:"What is the Title of your project?",
        name: "title",
    },

    {
        type: "input",
        message:"Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
        name: "tests",
    },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    function writeToFile(fileName, data) {
        return writeFile(fileName, generateMarkdown(data));
    }
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .createPromptModule(questios)
    .then((answers)=>
    writeFile('README.md', answers)
    )
    .then (() =>
    console.log(err)
    )
}

// Function call to initialize app
init();
