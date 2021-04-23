const manager = [
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

module.exports = {
  manager,
  engineer,
  intern,
  role,
};
