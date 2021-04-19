// fs library package for reading/writing files
const fs = require("fs");

// Includes packages needed for this application
const inquirer = require("inquirer");

// gets Specific functions {gernerateMarkdown} from the export information from generateMarkdown.js
const { generateMarkdown } = require("./js/generateMarkdown.js");

// 2nd way get all Information from the export of generateMarkdown.js
// const generateMarkdownInfo = require('./js/generateMarkdown.js');

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
        type: "input",
        name: "descriptionMotivation",
        message: "What was your motivation?",
      },
      {
        type: "input",
        name: "descriptionBuild",
        message: "Why did you build this project?",
      },
      {
        type: "input",
        name: "descriptionProblemSolve",
        message: "What problem does it solve?",
      },
      {
        type: "input",
        name: "descriptionLearn",
        message: "What did you learn?",
      },
      {
        type: "confirm",
        name: "tableOfContents",
        message: "What do u want a Table of Contents?",
      },
      {
        type: "input",
        name: "installProject",
        message: "What are the steps required to install your project?",
      },
      {
        type: "input",
        name: "usage",
        message: "Add screenshots Name that is in the images folder",
      },
      {
        type: "list",
        name: "usageImageType",
        message: "Choose an image type",
        choices: ["PNG", "JPG"],
      },
      {
        type: "input",
        name: "usageAltText",
        message: "Screenshots Alt text",
      },
      {
        type: "input",
        name: "credits",
        message: "List your collaborators",
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
      {
        type: "input",
        name: "licensesYear",
        message: "Type in the Current Year",
      },
      {
        type: "input",
        name: "licensesFullName",
        message: "Type in your Full Name",
      },
      {
        type: "input",
        name: "features",
        message: "List your Projects Features",
      },
      {
        type: "input",
        name: "tests",
        message: "Provide examples on how to test run your project",
      },
      {
        type: "input",
        name: "questionsGitHub",
        message: "Enter your GitHub username",
      },
      {
        type: "input",
        name: "questionsEmail",
        message: "Enter your E-mail",
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

      // 2nd way to get data
      // fs.writeFile(filename, generateMarkdownInfo.generateMarkdown(data), (err) =>
      // err ? console.log(err) : console.log('Success!')
      // );
    });
}

// Creates a function to initialize app
function init() {
  promptUser();
}

// Function call to initialize app
init();
