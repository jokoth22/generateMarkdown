// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

function promptUser() {
    // TODO: Create an array of questions for user input
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your project?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Write a brief description of your project:',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Describe the installation process if any:',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'What is this project usage for?',
            },
            {
                type: 'list',
                name: 'license',
                message: 'Choose a license for your project:',
                choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC', 'None'],
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'Who are the contributors of this project?',
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Is there any test included?',
            },
            {
                type: 'input',
                name: 'questions',
                message: 'What do I do if I have an issue?',
            },
            {
                type: 'input',
                name: 'username',
                message: 'Please enter your GitHub username:',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter your email:',
            },
        ])
    // .then((answers) => {
    //     const readMeContent = generateMarkdown(answers);
    //     writeToFile('index.html', readMeContent);
    // });
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
    );
}

// TODO: Create a function to initialize app
function initStart() {
    promptUser()
        // Use writeFile method imported from fs.promises to use promises instead of
        // a callback function
        .then((answers) => writeToFile('README.md', generateMarkdown(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
initStart();


/*
inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Generating README...');
    //write here
  });
*/