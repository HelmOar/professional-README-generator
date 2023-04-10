// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [

    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },

    {
        type: "input",
        name: "description",
        message: "Give a brief description of your project."
    },

    {
        type: "input",
        name: "motivation",
        message: "What was your motivation?"
    },

    {
        type: "input",
        name: "problem_solved",
        message: "What problem does it solve?"
    }, 
   
    {
        type: "input",
        name: "learnings",
        message: "What did you learn?"
    }, 
    {
        type: "input",
        name: "installation",
        message: "What is required to install your project?"
    }, 
    {
        type: "input",
        name: "usage",
        message: "What are the instructions for use?"
    }, 
    //
    {
        type: "input",
        name: "credits",
        message: "Who are your collaborators?"
    }, 
    
    {
        type: "input",
        name: "tests",
        message: "Describe any tests you run for your project."
    }, 
    {
        type: "list",
        name: "license",
        message: "Do you have a lisence?",
        choices: ["MIT", "Apache", "GPL", "None"]
    },

    {
        type: "input",
        name: "email",
        message: "What is your email?"
    }, 

    {
        type: "input",
        name: "github",
        message: "What is your github address?"
    }, 

];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        return writeToFile("README.md.EXAMPLE", generateMarkdown({...answers}));
    })
}

// Function call to initialize app
init();
