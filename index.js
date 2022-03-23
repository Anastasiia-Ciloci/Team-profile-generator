const inquirer = require("inquirer");
const fs = require("fs");

function renderTeamHTML(fileName, data) {
  fs.renderTeamHTML(fileName, data, (err) => {
    err
      ? console.error(err)
      : console.log("Success! Here is your rendered html");
  });
}

function init() {
  inquirer.prompt(question).then((answers) => {
    renderTeamHTML("./dist/my_team.html", generateHTML(answers));
  });
}

init();
