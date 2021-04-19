// fs library package for reading/writing files
const fs = require("fs");

// Includes packages needed for this application
const inquirer = require("inquirer");

// gets Specific functions {gernerateMarkdown} from the export information from generateMarkdown.js
const { generateMarkdown } = require("./js/generateMarkdown.js");

function promptUser() {
  // Creates an array of questions for user input
  inquirer
    .prompt([
      {
        type: "input",
        name: "yourProjectTitle",
        message: "What is your Project Title?",
      },
      {
        type: "confirm",
        name: "tableOfContents",
        message: "What do u want a Table of Contents?",
      },
      {
        type: "list",
        name: "licenses",
        message: "Choose an open-source license",
        choices: [
          "MIT License",
          "GNU General Public License v3.0",
          "GNU Affero General Public License v3.0",
        ],
      },
    ])
    .then((data) => {
      // split(' ') identifies space in the input and  join('') repmoves the spaces. So we do not have spaces in the file name.
      console.log(data);
      const filename = `${data.yourProjectTitle.split(" ").join("")}.md`;
      console.log(filename);

      // creates file in markdown location with the generateMarkdown input data
      fs.writeFile(`./markdown/${filename}`, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log("Success!")
      );
    });
}

// Creates a function to initialize app
function init() {
  promptUser();
}

// Function call to initialize app
init();
