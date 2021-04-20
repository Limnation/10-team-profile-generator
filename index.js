// fs library package for reading/writing files
const fs = require("fs");

// Includes packages needed for this application
const inquirer = require("inquirer");

// gets Specific functions {gernerateMarkdown} from the export information from generateMarkdown.js
const { generateHtml, generateCards } = require("./js/generateMarkdown.js");

function promptManager() {
  // Creates an array of questions for Manager input
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter their name.",
      },
      {
        type: "input",
        name: "employeeID",
        message: "Enter the employee ID.",
      },
      {
        type: "input",
        name: "emailAddress",
        message: "Enter email address.",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter office number.",
      },
      {
        type: "list",
        name: "role",
        message: "Do you want to add more members to the team?",
        choices: ["engineer", "intern", "finished"],
      },
    ])
    .then((data) => {
      if (data.role === "engineer") {
        promptEngineer();
      } else if (data.role === "intern") {
        promptIntern();
      } else {
        const filename = `teamroster.html`;

        // creates file in markdown location with the generateMarkdown input data
        fs.writeFile(`./profile/${filename}`, generateHtml(data), (err) =>
          err ? console.log(err) : console.log("Success!")
        );
      }
    });
}

function promptEngineer() {
  // Creates an array of questions for Engineer input
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Pease Enter their name.",
      },
      {
        type: "input",
        name: "employeeID",
        message: "Enter the employee ID.",
      },
      {
        type: "input",
        name: "emailAddress",
        message: "Enter email address.",
      },
      {
        type: "input",
        name: "GitHub",
        message: "Enter Engineer's GitHub.",
      },
      {
        type: "list",
        name: "role",
        message: "Do you want to add more members to the team?",
        choices: ["engineer", "intern", "finished"],
      },
    ])
    .then((data) => {
      if (data.role === "engineer") {
        promptEngineer();
      } else if (data.role === "intern") {
        promptIntern();
      } else {
        const filename = `teamroster.html`;

        // creates file in markdown location with the generateMarkdown input data
        fs.writeFile(`./profile/${filename}`, generateHtml(data), (err) =>
          err ? console.log(err) : console.log("Success!")
        );
      }
    });
}

function promptIntern() {
  // Creates an array of questions for Intern input
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter their name.",
      },
      {
        type: "input",
        name: "employeeID",
        message: "Enter the employee ID.",
      },
      {
        type: "input",
        name: "emailAddress",
        message: "Enter email address.",
      },
      {
        type: "input",
        name: "school",
        message: "Enter school.",
      },
      {
        type: "list",
        name: "role",
        message: "Do you want to add more members to the team?",
        choices: ["engineer", "intern", "finished"],
      },
    ])
    .then((data) => {
      if (data.role === "engineer") {
        promptEngineer();
      } else if (data.role === "intern") {
        promptIntern();
      } else {
        makeFile();
      }
    });
}

function makeFile() {
  const filename = `teamroster.html`;

  // creates file in markdown location with the generateMarkdown input data
  fs.writeFile(`./profile/${filename}`, generateHtml(data), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// Creates a function to initialize app
function init() {
  promptManager();
}

// Function call to initialize app
init();
