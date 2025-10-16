describe("OrangeHRM Tests", () => {
  /////////////////////////////* LOGIN */////////////////////////////
  before(() => {
    // يشتغل مرة وحدة قبل كل الاختبارات
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    ); // visit website
    cy.wait(4000);
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin", { delay: 200 }); //Enter Username
    cy.wait(4000);
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123", { delay: 200 }); //Enter Password
    cy.wait(4000);
    cy.get(".oxd-button").click(); //button login
    cy.wait(4000);
  });
  ////////////////////////* End code LOGIN */////////////////////////////

  ///////////////////////* ADD Employee*/////////////////////////////
  it("Add Employee", () => {
    cy.get(":nth-child(1) > .oxd-main-menu-item").click();
    cy.wait(2000);
    //this code for add employee
    cy.get(".orangehrm-header-container > .oxd-button").click();
    cy.wait(2000);
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click();
    cy.wait(2000);
    cy.get(".oxd-select-dropdown > :nth-child(3)").click(); // to select from dropdown list
    cy.wait(2000);
    cy.get(".oxd-autocomplete-text-input > input").click().type("S"); //write text in field autocmplete
    cy.wait(2000);
    cy.get(".oxd-autocomplete-dropdown > :nth-child(3)").click(); //choose item from auotcomplete
    cy.wait(2000);
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click(); //select from dropdown list
    cy.wait(2000);

    cy.get(".oxd-select-dropdown > :nth-child(2)").click(); // for select status is -->Enabled
    cy.wait(2000);
    cy.get(
      ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("WadhaAli");
    cy.wait(2000);
    cy.get(
      ".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Wadha@123");
    cy.wait(2000);
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Wadha@123");
    cy.wait(2000);
    cy.get(".oxd-button--secondary").click();
    cy.wait(2000);
    // First Method to search: This code for Search from a field using Username to search

    cy.get(":nth-child(2) > .oxd-input").first().click().type("WadhaAli"); //search username
    cy.wait(2000);
    cy.get(".oxd-form-actions > .oxd-button--secondary").click(); //click on button search
    cy.wait(2000);
    cy.get(
      ".oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon"
    ).click(); //click on checkbox to select username
    cy.wait(2000);
    cy.get(".orangehrm-horizontal-padding > div > .oxd-button").click();
    cy.wait(2000);
    cy.get(".orangehrm-modal-footer > .oxd-button--label-danger").click();
  });
  //////////////////*The End code for add employee*/////////////////////////////

  /////////////////////////** Add Job *////////////////////////////////////
  it("Add Job", () => {
    cy.get(":nth-child(1) > .oxd-main-menu-item").click(); // for click menu item -->Admin
    cy.wait(2000);
    cy.get(".oxd-topbar-body-nav > ul > :nth-child(2)").click(); // choose nav -->Job
    cy.wait(2000);
    cy.get(".oxd-dropdown-menu > :nth-child(1)").click(); //for choose --> Job Titles
    cy.wait(2000);
    cy.get(".oxd-button").click(); // for click on button--> Add
    cy.wait(2000);
    cy.get(":nth-child(2) > .oxd-input")
      .first()
      .click()
      .type("Software Engineer QA"); //for write Job title
    cy.wait(2000);
    cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea")
      .first()
      .click()
      .type(
        "Developed and automated test scripts using Cypress for OrangeHRM demo system. Designed and executed end-to-end test cases (login, employee management, search) to enhance software quality and ensure system reliability. "
      ); //for write Job Description
    cy.wait(2000);
    /*Uploading file */
    cy.log("uploading file");
    cy.get('[type="file"]').selectFile("cypress/fixtures/CV_WadhaAlgarni.pdf", {
      force: true,
    }); //upload file command
    cy.wait(2000);
    /*End of Uploading file */

    /*For add Text in textarea*/
    cy.get(
      ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-textarea"
    ).type("Thank You !"); //write note in text area
    cy.wait(2000);
    /*The End: add Text in textarea*/

    cy.get(".oxd-button--secondary").click(); //click to save all
    cy.wait(2000);
    // assertion
    cy.get(".oxd-table-body")
      .should("contain", "Software Engineer QA")
      .then(() => cy.log("Job title verified"));
    cy.wait(4000);
    // First find the exact row containing your job title and scrollview
    cy.contains(".oxd-table-row", "Software Engineer QA")
      .scrollIntoView({ duration: 300 })
      .should("exist")
      .within(() => {
        // checkbox click
        cy.get(":nth-child(1) > .oxd-table-card-cell-checkbox .oxd-icon").click(
          {
            force: true,
          }
        );
        // click trash
        cy.get(":nth-child(1) > .oxd-icon")
          .should("be.visible")
          .click({ force: true, multiple: true });
      });
    cy.wait(1000);
    cy.get(".orangehrm-modal-footer > .oxd-button--label-danger").click(); // confirm delete
  });
  ///////////////////**End code for Add Job *///////////////////////

  /////////////////////////** Edit My Info *////////////////////////////////////
  it("Edit My Info", () => {
    cy.get(":nth-child(6) > .oxd-main-menu-item").click(); // select -->My Info
    cy.wait(2000);
    cy.get(".employee-image").click(); //Edit Image
    cy.wait(2000);
    /*Uploading file */
    cy.log("uploading file");
    cy.get('[type="file"]').selectFile("cypress/fixtures/logo-6.jpg", {
      force: true,
    }); //upload file command
    cy.wait(2000);
    /*End of Uploading file */
    cy.get(".employee-image-wrapper > .employee-image").click(); // choose image pc
    cy.wait(2000);
    cy.get(".oxd-button").click(); //for save image
    cy.wait(2000);

    cy.get(":nth-child(1) > .orangehrm-tabs-item").click(); //for personal deatiels
    cy.wait(2000);

    cy.get(".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input")
      .clear()
      .type("Wadha");
    cy.wait(2000);

    cy.get(":nth-child(2) > :nth-child(2) > .oxd-input").clear().type("Ali");
    cy.wait(2000);
    cy.get(":nth-child(3) > :nth-child(2) > .oxd-input")
      .clear()
      .type("Algarni");
    cy.wait(2000);
    cy.get(":nth-child(3) > :nth-child(2) > .oxd-input")
      .clear()
      .type("Wadhaw23");
    cy.wait(2000);
    cy.get(
      ":nth-child(3) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
    )
      .clear()
      .type("211134");
    cy.wait(2000);
    cy.get(
      ":nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    )
      .clear()
      .type("1234");
    cy.wait(2000);
    cy.get(
      ":nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
    )
      .clear()
      .type("1234");
    cy.wait(2000);

    //////**Edit Date lic*////////
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input"
    ).clear(); // for edit date
    cy.wait(2000);
    cy.get(".oxd-calendar-selector-year")
      .click()
      .scrollIntoView({ duration: 300 }); //edit year
    cy.wait(2000);
    cy.get(":nth-child(56)").click();
    cy.wait(2000);
    cy.get(".oxd-calendar-selector-month").click().scrollIntoView({
      duration: 300,
    }); //edit month
    cy.get(".oxd-calendar-dropdown > :nth-child(1)").click(); //edit day
    cy.wait(2000);

    cy.get(":nth-child(6) > .oxd-calendar-date").click();
    cy.wait(2000);
    cy.get(
      ":nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click();

    cy.wait(2000);
    cy.get(".oxd-select-dropdown").scrollIntoView({ duration: 300 });
    cy.wait(2000);

    cy.get(":nth-child(154)").click();
    cy.wait(2000);
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input"
    ).click();
    cy.wait(2000);

    cy.get(".oxd-calendar-selector-year")
      .click()
      .scrollIntoView({ duration: 300 }); //edit year
    cy.wait(2000);
    cy.get(":nth-child(33)").click();

    cy.get(".oxd-calendar-selector-month")
      .click()
      .scrollIntoView({ duration: 300 });
    cy.wait(2000);
    cy.get(".oxd-calendar-dropdown > :nth-child(3)").click();
    cy.wait(2000);
    cy.get(":nth-child(14) > .oxd-calendar-date").click();
    cy.wait(2000);
    cy.get(
      ":nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button"
    ).click(); //for save all
    cy.wait(2000);

    cy.get(
      ".orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input"
    )
      .clear()
      .type("Wadha23");
    cy.wait(2000);
    cy.get(
      ".orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button"
    ).click(); //for save

    cy.get(".orangehrm-action-header > .oxd-button").click(); //for attach
    cy.wait(2000);
    // cy.get('.oxd-file-button').click();

    /*Uploading file */
    cy.log("uploading file");
    cy.get('[type="file"]').selectFile("cypress/fixtures/logo-6.jpg", {
      force: true,
    }); //upload file command
    cy.wait(2000);
    /*End of Uploading file */

    cy.get(".oxd-textarea").type("Thank you !");
    cy.wait(2000);
    cy.get(
      ".orangehrm-attachment > .orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button--secondary"
    ).click();
  });
  ///////////////////**End code for Edit My Info *///////////////////////

  /////////////////////////////* LOGOUT */////////////////////////////
  // يشتغل مرة وحدة بعد كل الاختبارات
  after(() => {
    /**For log out */
    cy.get(".oxd-userdropdown-tab").click();
    cy.wait(2000);
    cy.get(":nth-child(4) > .oxd-userdropdown-link").click();
    cy.wait(2000);
    /**The End code log out */
  });
  /////////////////////////* End code LOGOUT */////////////////////////////
});
