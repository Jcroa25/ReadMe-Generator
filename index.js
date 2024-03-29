// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const {writeFile} = require('fs').promises;
const generateMarkdown = require('./utils/generateMarkdown.js');

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
        message:"Who/what are the contributions to the project? ",
        name: "contribution",
    },

    {
        type: "input",
        message:"What is the Title of your project?",
        name: "title",
    },

    {
        type: "list",
        message:"What license did you use for this project?",
        name: "license",
        choices: ["ISC License (ISC)", "The MIT License", "SIL Open Font License 1.1", "Unlicense"]
    },

    {
        type: "input",
        message:"Run tests and provide examples on how to run them here.",
        name: "tests",
    },

    {
        type: "input",
        message:"Provide your Github username.",
        name: "username",
    },

    {
        type: "input",
        message:"Provide your email.",
        name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        return writeFile(fileName, generateMarkdown(data));
    }

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => writeToFile('README.md', answers))
    .then (() => console.log('README.md CREATED!'))
    .catch((err) => console.log(err))
}

// Function call to initialize app
init();
