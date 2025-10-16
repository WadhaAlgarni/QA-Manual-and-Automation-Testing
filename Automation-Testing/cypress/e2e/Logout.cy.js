it.only("TC005 - Logout", function () {
  // cy.visit(
  //   "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  // );
  // cy.wait(2000);
  // cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
  //   "Admin",
  //   { delay: 100 }
  // );
  // cy.wait(4000);
  // cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
  //   "admin123",
  //   { delay: 100 }
  // );
  // cy.wait(4000);

  // cy.get(".oxd-button").click(); //for login button
  // cy.wait(4000);

  /**For log out */
  cy.get(".oxd-userdropdown-tab").click();
  cy.wait(4000);
  cy.get(":nth-child(4) > .oxd-userdropdown-link").click();
  cy.wait(4000);
  /**The End code log out */
});
