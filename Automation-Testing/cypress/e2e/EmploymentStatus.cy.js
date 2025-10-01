it.only("Employment Status-OrangeHR", function () {
  // cy.visit(
  //   "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  // );
  // cy.wait(2000);
  // cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
  //   "Admin",
  //   { delay: 100 }
  // );
  // cy.wait(2000);
  // cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
  //   "admin123",
  //   { delay: 100 }
  // );
  // cy.wait(2000);

  // cy.get(".oxd-button").click(); //for click on button-->login
  // cy.wait(2000);

  cy.get(":nth-child(1) > .oxd-main-menu-item").click(); // for click menu item -->Admin
  cy.wait(2000);
  cy.get(".oxd-topbar-body-nav > ul > :nth-child(2)").click(); // choose nav -->Job
  cy.wait(2000);
  cy.get(".oxd-dropdown-menu > :nth-child(3)").click(); //for choose --> Employment Status
  cy.wait(2000);
  cy.get(".oxd-button").click(); // for click on button--> Add
  cy.wait(2000);
  cy.get(":nth-child(2) > .oxd-input").first().click().type("Part Time- COOP"); //for write name Add Emp status
  cy.wait(2000);
  cy.get(".oxd-button--secondary").click(); //click to save all
  cy.wait(2000);
  // assertion
  cy.get(".oxd-table-body")
    .should("contain", "Part Time- COOP")
    .then(() => cy.log("Job title verified"));
  cy.wait(4000);
  // First find the exact row containing your job title and scrollview
  cy.contains(".oxd-table-row", "Part Time- COOP")
    .scrollIntoView({ duration: 300 })
    .should("exist")
    .within(() => {
      // checkbox click
      cy.get(":nth-child(1) > .oxd-table-card-cell-checkbox .oxd-icon").click({
        force: true,
      });
      // click trash
      cy.get(":nth-child(1) > .oxd-icon")
        .should("be.visible")
        .click({ force: true, multiple: true });
    });
  cy.wait(2000);
  cy.get(".orangehrm-modal-footer > .oxd-button--label-danger").click(); // confirm delete
  cy.wait(2000);
});
