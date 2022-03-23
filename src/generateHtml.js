function generateHtml(employee) {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    <title>Team Generator</title>
  </head>
  <body>
      <header> <h1>My team</h1>
      </header>
      <div> My employees
      ${generateCards(employee)}
      </div>
  </body>
</html>
  
    `;
}
const generateCards = function (employee) {
  const manager = data.manager.map(function (type) {
    var managerDiv = `
    <div class = "card" >
    <h2>Manager</h2>
    <h3>${employee.name}</h3>
    <p>ID: ${employee.id}</p>
    </div>
    `;
    return managerDiv;
  });
  const engineer = data.engineer.map(function (type) {
    var engineerDiv = `
    <div class = "card" >
    <h2>Engineer</h2>
    <h3>${employee.name}</h3>
    <p>ID: ${employee.id}</p>
    </div>
    `;
    return engineerDiv;
  });
  const intern = data.intern.map(function (type) {
    var internDiv = `
    <div class = "card" >
    <h2>Intern</h2>
    <h3>${employee.name}</h3>
    <p>ID: ${employee.id}</p>
    </div>
    `;
    return internDiv;
  });
  return [manager, engineer, intern];
};

module.exports = generateHtml;
