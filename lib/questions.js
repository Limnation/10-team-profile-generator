const manager = [
  {
    type: "list",
    name: "ConfirmRole",
    message: "Adding manager to Team",
    choices: ["manager"],
    default: "manager",
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
    type: "list",
    name: "ConfirmRole",
    message: "Adding Engineer to Team",
    choices: ["engineer"],
    default: "engineer",
  },
  {
    type: "input",
    name: "name",
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
    type: "list",
    name: "ConfirmRole",
    message: "Adding Intern to Team",
    choices: ["intern"],
    default: "intern",
  },
  {
    type: "input",
    name: "name",
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
