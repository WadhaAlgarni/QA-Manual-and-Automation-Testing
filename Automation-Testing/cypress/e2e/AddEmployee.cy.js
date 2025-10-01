// =============================
// TC006 & TC007 - Add Employee & Verify Employee Details
// =============================
it.only("TC006 - Add Employee and TC007 - Verify Employee Details", function () {
  // cy.visit(
  //   "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  // );

  // // Login
  // cy.visit(
  //   "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  // );
  // cy.wait(3000);
  // cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
  //   "Admin",
  //   { delay: 100 }
  // );
  // cy.wait(3000);
  // cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
  //   "admin123",
  //   { delay: 100 }
  // );
  // cy.wait(3000);

  // cy.get(".oxd-button").click(); //for login button
  // cy.wait(3000);

  // Navigate to Admin menu
  cy.get(":nth-child(1) > .oxd-main-menu-item").click();
  cy.wait(3000);

  // Click on Add Employee button
  cy.get(".orangehrm-header-container > .oxd-button").click();
  cy.wait(3000);

  // Select User Role from dropdown
  cy.get(
    ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
  ).click();
  cy.wait(3000);

  cy.get(".oxd-select-dropdown > :nth-child(3)").click(); // Select option from dropdown
  cy.wait(3000);

  // Search and select employee name from autocomplete
  cy.get(".oxd-autocomplete-text-input > input").click().type("J"); // Type a letter to trigger autocomplete
  cy.wait(3000);

  cy.get(".oxd-autocomplete-dropdown > :nth-child(3)").click(); // Select the employee from autocomplete list
  cy.wait(3000);

  // Select status from dropdown
  cy.get(
    ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
  ).click(); //select from dropdown list
  cy.wait(3000);

  cy.get(".oxd-select-dropdown > :nth-child(2)").click(); // Select "Enabled" status
  cy.wait(3000);

  // Enter Username
  cy.get(":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
    "WadhaAlgarni2"
  );
  cy.wait(3000);

  // Enter Password
  cy.get(
    ".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input"
  ).type("Wadha@123");
  cy.wait(3000);

  // Confirm Password
  cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
    "Wadha@123"
  );
  cy.wait(3000);

  // Click Save to add employee
  cy.get(".oxd-button--secondary").click();
  cy.wait(3000);
  //===== The End code for add employee ====

  // ===== Search for the employee =====
  // First Method to search: This method searches using the Username field
  cy.get(":nth-child(2) > .oxd-input").first().click().type("WadhaAlgarni2"); //search username
  cy.wait(3000);
  cy.get(".oxd-form-actions > .oxd-button--secondary").click(); // Click Search button
  cy.wait(3000);

  //Select employee from search results
  cy.get(
    ".oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon"
  ).click(); // Click checkbox to select employee
  cy.wait(3000);

  // Click Delete and confirm
  cy.get(".orangehrm-horizontal-padding > div > .oxd-button").click(); //Click delete button
  cy.wait(3000);
  cy.get(".orangehrm-modal-footer > .oxd-button--label-danger").click(); // Confirm deletion

  // Second Method to search: Verify that the search results contain the employee
  // cy.get(".oxd-table-body")
  //   .should("contain", "WadhaAlgarni")
  //   .then(() => cy.log("Job title verified"));
  // cy.wait(4000);
  // First find the exact row containing your job title and scrollview
  // cy.contains(".oxd-table-row", "WadhaAlgarni")
  //   .scrollIntoView({ duration: 300 })
  //   .should("exist")
  //   .within(() => {
  // checkbox click
  // cy.get(":nth-child(1) > .oxd-table-card-cell-checkbox .oxd-icon").click({
  //   force: true,
  // });
  // click trash
  //     cy.get(":nth-child(1) > .oxd-icon")
  //       .should("be.visible")
  //       .click({ force: true, multiple: true });
  //   });
  // cy.wait(3000);
  // cy.get(".orangehrm-modal-footer > .oxd-button--label-danger").click(); // confirm delete

  // cy.get(".oxd-topbar-body-nav > ul > :nth-child(2)").click();
});
