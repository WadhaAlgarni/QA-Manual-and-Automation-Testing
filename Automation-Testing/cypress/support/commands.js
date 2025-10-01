// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add("login", (username = "Admin", password = "admin123") => {
//   cy.visit(
//     "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
//   );
//   cy.get("input[name='username']").type(username, { delay: 100 });
//   cy.get("input[name='password']").type(password, { delay: 100 });
//   cy.get(".oxd-button").click();
//   cy.url().should("include", "/dashboard");
// });
