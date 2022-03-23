const Employee = require("../lib/Employee");

const generalQ = 
  [
    {
        type:" input",
        message: "What is your name?",
        name:"employeeName",
    },
    {
        type:" input",
        message: "What is the id number?",
        name:"employeeId",
    },
    {
        type:" input",
        message: "What is your email?",
        name:"employeeEmail",
    }
];
const managersQs= [
    {
        type:" input",
        message: "What is your office number?",
        name:"managerOfficeN",
    }
]

const engineersQs=[
    {
        {
            type:" input",
            message: "What is your github user name?",
            name:"gitHubName",
        }
    } 
]

const internsQs= [
    {
        type:" input",
        message: "What school did you finish ?",
        name:"internSchool",
    }
]

inquirer
.prompt([
    {
        type:"rawlist",
        name:"type",
        message: "What type of employee would you like to add?",
        choices: ["Engineer", "Manager","Intern","Finish building the team"],
    },
     ...generalQ, 
    

])
.then((employee) =>{
if (employee.type ==="Engineer"){

}
if (employee.type ==="Manager"){

}
if (employee.type ==="Intern"){

}
if (employee.type ==="Finish building the team"){
process.exit();
}
})

module.exports = renderTeamHTML;
