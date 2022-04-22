//steps to solve
// 1. user answers questions
//-> inquirer prompt
// 2. pass answers in the .then()
//-> import generateMarkdown
// 3. hand off to Generate Markdown to create MD syntax
// 4. pass MD to writeToFile

// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
  {
    name: 'currentYear',
    message: 'What is the current year?',
    type: 'input',
  },
  {
    name: 'username',
    message: 'what is your github username?',
    type: 'input',
  },
  {
    name: 'githubLink',
    message: 'what is your github URL?',
    type: 'input',
  },
  {
    name: 'email',
    message: 'What is your email address?',
    type: 'input',
  },
  {
    name: 'projectName',
    message: "What is your projects's name?",
    type: 'input',
  },
  {
    name: 'test',
    message: 'What are the test instructions you would like to provide?',
    type: 'input',
  },
  {
    name: 'contributing',
    message: 'Anyone worthy of mentioning as contributors to the project?',
    type: 'input',
  },
  {
    name: 'installation',
    message: 'What is the installation process?',
    type: 'input',
  },
  {
    name: 'description',
    message: 'Please write a short description of your project?',
    type: 'input',
  },
  {
    name: 'license',
    message: 'which license are you using with your application?',
    type: 'list',
    choices: ['Apache', 'Boost', 'The Artistic', 'Mozilla', 'MIT'],
  },
];

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    fs.writeFile('../ReadMe.md', generateMarkdown(response), function (error) {
      if (error) console.error(error);
    });
  });
}

// Function call to initialize app
init();
