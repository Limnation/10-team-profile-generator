// fs library package for reading/writing files
const fs = require("fs");

// Includes packages needed for this application
const inquirer = require("inquirer");
const responses = [];

// gets Specific functions {gernerateMarkdown} from the export information from generateMarkdown.js
const { generateHtml, generateCards } = require("./js/generatehtml.js");

function promptManager() {
  // Creates an array of questions for Manager input
  inquirer
    .prompt([
      {
        type: "list",
        name: "manager",
        message: "manager",
        choices: ["manager"],
      },
      {
        type: "input",
        name: "name",
        message: "Enter Manager name.",
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
        responses.push(data);
        promptEngineer();
      } else if (data.role === "intern") {
        responses.push(data);
        promptIntern();
      } else {
        responses.push(data);
        makeFile(responses);
      }
    });
}

function promptEngineer() {
  // Creates an array of questions for Engineer input
  inquirer
    .prompt([
      {
        type: "input",
        name: "nameE",
        message: "Enter Engineer name.",
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
        responses.push(data);
        promptEngineer();
      } else if (data.role === "intern") {
        responses.push(data);
        promptIntern();
      } else {
        responses.push(data);
        makeFile(responses);
      }
    });
}

function promptIntern() {
  // Creates an array of questions for Intern input
  inquirer
    .prompt([
      {
        type: "input",
        name: "nameI",
        message: "Enter Intern name.",
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
        responses.push(data);
        promptEngineer();
      } else if (data.role === "intern") {
        responses.push(data);
        promptIntern();
      } else {
        responses.push(data);
        makeFile(responses);
      }
    });
}

function makeFile(data) {
  console.log(data);
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
