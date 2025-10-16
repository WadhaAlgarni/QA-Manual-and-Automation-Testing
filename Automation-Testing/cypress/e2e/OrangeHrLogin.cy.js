it.only("TC001 - Verify user can login with valid credentials", function () {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  ); // visit website
  cy.wait(4000);
  cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
    "Admin",
    { delay: 200 }
  );
  cy.wait(4000);
  cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
    "admin123",
    { delay: 200 }
  );
  cy.wait(4000);
  /**For log out */
  cy.get(".oxd-button").click();
  cy.wait(4000);

  cy.get(".oxd-userdropdown-tab").click();
  cy.wait(4000);
  cy.get(":nth-child(4) > .oxd-userdropdown-link").click();
  cy.wait(4000);
  /**The End code log out */
});
