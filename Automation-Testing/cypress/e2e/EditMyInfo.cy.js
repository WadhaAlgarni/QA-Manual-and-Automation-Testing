it.only(" TC011 and TC012 Edit My Info", function () {
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

  cy.get(".oxd-button").click(); //for click on button-->login
  cy.wait(4000);

  /*Start code for My Info */
  // Navigate to "My Info" section from main menu
  cy.get(":nth-child(6) > .oxd-main-menu-item").click(); // select -->My Info
  cy.wait(4000);

  // Edit employee profile image
  cy.get(".employee-image").click(); // Click on employee image to open edit
  cy.wait(4000);

  // Upload new profile image
  cy.log("uploading file"); // Log the file upload action
  cy.get('[type="file"]').selectFile("cypress/fixtures/logo-6.jpg", {
    force: true,
  }); // Upload file command
  cy.wait(4000);

  cy.get(".employee-image-wrapper > .employee-image").click(); // Confirm selection of image from PC
  cy.wait(2000);
  cy.get(".oxd-button").click(); // Save the uploaded profile image
  cy.wait(4000);

  // Open "Personal Details" tab
  cy.get(":nth-child(1) > .orangehrm-tabs-item").click(); // Open personal details
  cy.wait(4000);

  // Edit first name
  cy.get(".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input")
    .clear()
    .type("Wadha"); // Enter First Name
  cy.wait(4000);

  // Edit middle name
  cy.get(":nth-child(2) > :nth-child(2) > .oxd-input").clear().type("Ali"); // Enter Middle Name
  cy.wait(4000);

  // Edit last name
  cy.get(":nth-child(3) > :nth-child(2) > .oxd-input").clear().type("Algarni"); // Enter Last Name
  cy.wait(4000);

  // Edit employee ID
  cy.get(":nth-child(3) > :nth-child(2) > .oxd-input").clear().type("Wadhaw23"); // Enter Employee ID
  cy.wait(4000);

  // Edit Driver's License Number
  cy.get(
    ":nth-child(3) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
  )
    .clear()
    .type("211134"); // Enter License Number
  cy.wait(4000);

  // Edit License Expiry
  cy.get(
    ":nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
  )
    .clear()
    .type("1234"); // Enter License Expiry
  cy.wait(4000);

  // Edit SSN Number
  cy.get(
    ":nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
  )
    .clear()
    .type("1234"); // Enter SSN Number
  cy.wait(4000);

  //////**Edit Date license*////////
  cy.get(
    ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input"
  ).clear(); // Clear Date field for editing
  cy.wait(4000);

  // Select year from calendar
  cy.get(".oxd-calendar-selector-year")
    .click()
    .scrollIntoView({ duration: 300 }); // Open year selector
  cy.wait(4000);
  cy.get(":nth-child(56)").click(); // Select specific year
  cy.wait(4000);

  // Select month from calendar
  cy.get(".oxd-calendar-selector-month").click().scrollIntoView({
    duration: 300,
  }); // Open month selector
  cy.wait(4000);
  cy.get(".oxd-calendar-dropdown > :nth-child(1)").click(); // Select day
  cy.wait(4000);

  // Select day from calendar
  cy.get(":nth-child(6) > .oxd-calendar-date").click(); // Pick specific day
  cy.wait(4000);

  // Select Nationality from dropdown
  cy.get(
    ":nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
  ).click(); // Open Nationality dropdown
  cy.wait(4000);
  cy.get(".oxd-select-dropdown").scrollIntoView({ duration: 300 }); // Scroll to options
  cy.wait(4000);
  cy.get(":nth-child(154)").click(); // Select nationality
  cy.wait(4000);

  // Edit another date field (e.g., Date of Birth)
  cy.get(
    ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input"
  ).click(); // Open date picker
  cy.wait(4000);

  cy.get(".oxd-calendar-selector-year").click(); // Select year
  cy.wait(2000);

  cy.get(".oxd-calendar-dropdown > :nth-child(33)").click();
  cy.wait(2000);
  cy.get(".oxd-calendar-selector-month").click(); // Select month
  cy.wait(2000);

  cy.get(".oxd-calendar-dropdown > :nth-child(5)").click(); // Select day
  cy.wait(4000);
  cy.get(":nth-child(14) > .oxd-calendar-date").click(); // Confirm date
  cy.wait(4000);

  // Save all personal details
  cy.get(":nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button").click(); // Save changes
  cy.wait(4000);

  // Edit login details (username)
  cy.get(
    ".orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input"
  )
    .clear()
    .type("Wadha23"); // Enter new username
  cy.wait(4000);
  cy.get(
    ".orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button"
  ).click(); // Save login details

  // Attach document
  cy.get(".orangehrm-action-header > .oxd-button").click(); // Click Attach button
  cy.wait(4000);

  // Upload file for attachment
  cy.log("uploading file"); // Log action
  cy.get('[type="file"]').selectFile("cypress/fixtures/logo-6.jpg", {
    force: true,
  }); // Upload attachment
  cy.wait(4000);

  // Add note for attachment
  cy.get(".oxd-textarea").type("Thank you !"); // Add comment
  cy.wait(4000);

  // Save attached document
  cy.get(
    ".orangehrm-attachment > .orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button--secondary"
  ).click(); // Save attachment
  cy.wait(4000);
});
