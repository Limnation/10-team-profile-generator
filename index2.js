// fs library package for reading/writing files
const fs = require("fs");

// Includes packages needed for this application
const inquirer = require("inquirer");
const responses = [];

// gets Specific functions {gernerateMarkdown} from the export information from generateMarkdown.js
const { generateHtml, generateCards } = require("./js/generateMarkdown.js");

const manager = [
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
];

const engineer = [
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
];

const intern = [
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
];

const role = [
  {
    type: "list",
    name: "role",
    message: "Do you want to add more members to the team?",
    choices: ["engineer", "intern", "finished"],
  },
];

// arrow fucntion that prompts
const prompts = () => {
  inquirer.prompt(manager).then((data) => {
    inquirer.prompt(role);
    if (data.role === "engineer") {
      responses.push(data);
      inquirer.prompt(engineer);
    } else if (data.role === "intern") {
      responses.push(data);
      inquirer.prompt(intern);
    } else {
      responses.push(data);
      makeFile(responses);
    }
  });
};

// Fucntion that Created my HTML page
function makeFile(data) {
  console.log(data);
  const filename = `teamroster.html`;

  // creates file in markdown location with the HTML page input data
  fs.writeFile(`./profile/${filename}`, generateHtml(data), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// Creates a function to initialize app
function init() {
  prompts();
}

// Function call to initialize app
init();
