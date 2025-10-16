it.only("TC009 - AddJob", function () {
  // cy.visit(
  //   "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  // );
  // cy.wait(4000);
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

  // cy.get(".oxd-button").click(); //for click on button-->login
  // cy.wait(4000);

  // Navigate to the Admin menu
  cy.get(":nth-child(1) > .oxd-main-menu-item").click(); //Click on "Admin" menu
  cy.wait(4000);

  //Navigate to Job section
  cy.get(".oxd-topbar-body-nav > ul > :nth-child(2)").click(); //Click on "Job" tab
  cy.wait(4000);

  //Select job titles option
  cy.get(".oxd-dropdown-menu > :nth-child(1)").click(); //Select "Job Titles"
  cy.wait(4000);

  // Click Add button to create a new Job Title
  cy.get(".oxd-button").click(); // Click "Add" button
  cy.wait(4000);

  // Enter Job title
  cy.get(":nth-child(2) > .oxd-input")
    .first()
    .click()
    .type("Software Engineer QA"); //Type Job title
  cy.wait(4000);

  //Enter job description
  cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea")
    .first()
    .click()
    .type(
      "Developed and automated test scripts using Cypress for OrangeHRM demo system. Designed and executed end-to-end test cases (login, employee management, search) to enhance software quality and ensure system reliability. "
    ); //Type Job Description
  cy.wait(4000);

  /*Uploading a file */
  cy.log("uploading file");
  cy.get('[type="file"]').selectFile("cypress/fixtures/CV_WadhaAlgarni.pdf", {
    force: true,
  }); //upload file command
  cy.wait(4000);
  /*End of file Upload */

  /* Adding text to notes textarea*/
  cy.get(
    ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-textarea"
  ).type("Thank You !"); //Type note in textarea
  cy.wait(4000);
  /*End of adding Text in notes*/

  //Save the nem job title
  cy.get(".oxd-button--secondary").click(); //click "Save"
  cy.wait(4000);

  // Assertion: Verify Job Title was added successfully
  cy.get(".oxd-table-body")
    .should("contain", "Software Engineer QA")
    .then(() => cy.log("Job title verified")); // Log success message
  cy.wait(4000);

  // Find the added job row, scroll into view, and delete it
  cy.contains(".oxd-table-row", "Software Engineer QA")
    .scrollIntoView({ duration: 300 }) //Scroll to the job row
    .should("exist") // verify it exists
    .within(() => {
      // Select the checkbox for the job
      cy.get(":nth-child(1) > .oxd-table-card-cell-checkbox .oxd-icon").click({
        force: true,
      });
      // click trash icon to delete
      cy.get(":nth-child(1) > .oxd-icon")
        .should("be.visible")
        .click({ force: true, multiple: true });
    });
  cy.wait(4000);

  //Confirm deletion
  cy.get(".orangehrm-modal-footer > .oxd-button--label-danger").click(); // Click "Yes, Delete"
  cy.wait(4000);
});
