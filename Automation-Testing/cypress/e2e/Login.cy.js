it.only("TC001 - Login", function () {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  cy.wait(4000);
  cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
    "Admin",
    { delay: 100 }
  );
  cy.wait(4000);
  cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
    "admin123",
    { delay: 100 }
  );
  cy.wait(4000);

  cy.get(".oxd-button").click(); //for login button
  cy.wait(4000);
});
