// fs library package for reading/writing files
const fs = require("fs");

// Includes packages needed for this application
const inquirer = require("inquirer");
const responses = [];

// gets Specific functions {gernerateMarkdown} from the export information from generateMarkdown.js
const { generateHtml, generateCards } = require("./js/generateMarkdown.js");

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
  promptManager();
}

// Function call to initialize app
init();
