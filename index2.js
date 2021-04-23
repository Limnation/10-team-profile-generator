// fs library package for reading/writing files
const fs = require("fs");

// Includes packages needed for this application
const inquirer = require("inquirer");

// array collecting all the responses in an array
const responses = [];

// gets Specific functions {generateHtml, generateCards} from generatehtml.js
const { generateHtml, generateCards } = require("./js/generatehtml.js");

// gets Specific arrays {manager, engineer, intern, role} from questions.js
const { manager, engineer, intern, role } = require("./lib/questions.js");

// arrow fucntion that prompts
const prompts = () => {
  inquirer.prompt(manager).then((data) => {
    inquirer.prompt(role);
    if (data.role === "engineer") {
      responses.push(data);
      inquirer.prompt(engineer);
      inquirer.prompt(role);
    } else if (data.role === "intern") {
      responses.push(data);
      inquirer.prompt(intern);
      inquirer.prompt(role);
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
