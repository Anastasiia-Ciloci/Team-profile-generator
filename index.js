const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHtml = require("./src/generateHtml");

var team = [];

const employeeType = () => {
  return inquirer.prompt([
    {
      type: "rawlist",
      name: "type",
      message: "What type of employee would you like to add?",
      choices: ["Engineer", "Manager", "Intern", "Finish building the team"],
    },
  ]);
};

const employeePrompt = () => {
  return inquirer.prompt([
    {
      type: " input",
      message: "What is employee name?",
      name: "name",
    },
    {
      type: " input",
      message: "What is employee id?",
      name: "id",
    },
    {
      type: " input",
      message: "What is employee email?",
      name: "email",
    },
  ]);
};

const mainPrompt = (type) => {
  if (type === "Engineer") {
    return employeePrompt()
      .then((employee) => {
        return inquirer
          .prompt([
            {
              type: " input",
              message: "What is your github user name?",
              name: "github",
            },
          ])
          .then((answer) => {
            employee.github = answer.github;
            return employee;
          });
      })
      .then((employee) => {
        team.push(
          new Engineer(
            employee.name,
            employee.id,
            employee.email,
            employee.github
          )
        );
      });
  } else if (type === "Manager") {
    return employeePrompt()
      .then((employee) => {
        return inquirer
          .prompt([
            {
              type: " input",
              message: "What is your office number?",
              name: "officeNumber",
            },
          ])
          .then((answer) => {
            employee.officeNumber = answer.officeNumber;
            return employee;
          });
      })
      .then((employee) => {
        team.push(
          new Manager(
            employee.name,
            employee.id,
            employee.email,
            employee.officeNumber
          )
        );
      });
    //console.log("Enter a manager");
  } else if (type === "Intern") {
    return employeePrompt()
      .then((employee) => {
        return inquirer
          .prompt([
            {
              type: " input",
              message: "What school did you finish ?",
              name: "school",
            },
          ])
          .then((answer) => {
            employee.school = answer.school;
            return employee;
          });
      })
      .then((employee) => {
        team.push(
          new Intern(
            employee.name,
            employee.id,
            employee.email,
            employee.school
          )
        );
      });
  }
  // console.log("Enter an intern");
  else if (type === "Finish building the team") {
    fs.writeFileSync("./dist/index.html", generateHtml(team));
    process.exit();
  }
};

function init() {
  employeeType().then((employee) => {
    mainPrompt(employee.type).then(init);
  });
}

init();
