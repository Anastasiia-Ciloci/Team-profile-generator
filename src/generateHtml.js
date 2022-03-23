function generateHtml(data) {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
      <header> <h1>My team</h1>
      </header>
      <div> My employees</div>
  </body>
</html>

    
    `;
}

module.exports = generateHtml;
