// placed promises in fs for ease of use
const fs = require("fs/promises");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{

    // input values required for readME
    type: "input",
    name: "title",
    message: "Enter the title of this project"
},
{
    type: "input",
    name: "description",
    message: "Enter a project description"

},

{
    type: "input",
    name: "installation",
    message: "Add installation requirements to run the App"

},

{
    type: "input",
    name: "usage",
    message: "Add instructions on how to use this App"

},

{
    type: "input",
    name: "contribution",
    message: "Add contribution guidelines for this App"

},

{
    type: "input",
    name: "tests",
    message: "Add test information for this App"

},

{
    type: "input",
    name: "github_username",
    message: "Add your GitHub user name"

},

{
    type: "input",
    name: "email",
    message: "Add your contact email"

},

// list options required for licencing
{
    type: "list",
    name: "license",
    message: "Select a license",
    choices: [
        {
            name: "mit",
            value: "MIT"
        },
        {
            name: "GNU",
            value: "GNU General Public License v3.0"

        }
    ]
}


];

// function to initialize program
function init() {
    console.log("Welcome to the ReadME generator App")

    // call inquirer to show questions in order
    inquirer.prompt(questions)
        // pull back and print responses
        .then(choice => {
            // calling the generate markdown connecting choice to create string values for readME (as currently choice is an object with strings)
            let markdown = generateMarkdown(choice)
            console.log(markdown)
            //takes markdown and writes into readME
            fs.writeFile('./readME.md', markdown)

        })
}

// function call to initialize program
init();
