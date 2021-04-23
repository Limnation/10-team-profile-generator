// Creates a function to generate markdown for Html
function generateHtml(data) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile Generator</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
      <link rel="stylesheet" href="/css/team.css">
  </head>
  <body>
      <header>
          <h1>My Team</h1>
      </header>
      <section>
          <div class="row row-cols-1 row-cols-md-3 g-4 middle">
          ${generateCards(data)}
          </div>
      </section>
  </body>
  </html>`;
}

// creates the Cards
function generateCards(data) {
  let htmlArray = [];

  data.forEach((employee) => {
    htmlArray.push(`
    <div class="col">
      <div class="card">
          <div class="card-body b-color">
          <h5 class="card-title">${employee.name}</h5>
          <h5 class="card-title"><img src="" class="" alt="">${
            employee.ConfirmRole
          }</h5>
          </div>
          <div class="card centers">
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${employee.employeeID}</li>
                  <li class="list-group-item">Email: <a href="mailto:${
                    employee.emailAddress
                  }">${employee.emailAddress}</a></li>
                  ${
                    employee.ConfirmRole === "engineer"
                      ? `<li class="list-group-item">GitHub: ${employee.GitHub}</li>`
                      : employee.ConfirmRole === "intern"
                      ? `<li class="list-group-item">school: ${employee.school}</li>`
                      : `<li class="list-group-item">office number: ${employee.officeNumber}</li>`
                  }
              </ul>
          </div>
      </div>
    </div>
  `);
  });

  return htmlArray.join("");
}

// module.exports is an object we use to store variables or methods to be called on in other js
module.exports = {
  generateHtml,
  generateCards,
};
