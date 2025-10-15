# QA Manual and Automation Testing
This repository is part of my QA learning journey with **Tuwaiq Academy - Software Testing & Automation Bootcamp**.  
It contains both **manual testing (test cases)** and **automation testing (Cypress end-to-end scripts)** to validate OrangeHRM features.

- Manual testing: Designed test cases for **Login, Logout, Add Employee, Edit Info, and Job Management**.  
- Automation testing: Implemented Cypress scripts for end-to-end scenarios.  
- Purpose: Practice **QA processes**, **test documentation**, and **automation execution**.

---

## 📁 Project Structure

```plaintext
QA-Manual-and-Automation-Testing/
├─ 📁 ManualTesting
│  └─ 📄 TestCases.xlsx
├─ 📁 Automation-Testing
│  ├─ 📁 cypress
│  │  ├─ 📁 e2e
│  │  │  ├─ 📄 Login.cy.js
│  │  │  ├─ 📄 Logout.cy.js
│  │  │  ├─ 📄 AddEmployee.cy.js
│  │  │  ├─ 📄 EmploymentStatus.cy.js
│  │  │  ├─ 📄 OrangeHrBeforeAfter.cy.js
│  │  │  ├─ 📄 OrangeHrBeforeAfterEach.cy.js
│  │  │  ├─ 📄 EditMyInfo.cy.js
│  │  │  ├─ 📄 AddJob.cy.js
│  │  │  └─ 📄 RegressionTest.cy.js
│  │  └─ 📁 support
│  └─ 📄 package.json
└─ 📄 README.md
```

---
## 📝 Manual Testing
- Created test cases covering:
  - Valid & invalid login  
  - Logout functionality  
  - Add employee  
  - Edit employee information  
  - Assign jobs
📄 File: `ManualTesting/TestCases.xlsx`

---

## ⚡ Automation Testing

- **Framework:** Cypress  
- **Language:** JavaScript  
- **Coverage:** End-to-end (E2E) testing of Login → Logout → Employee Management, including all scenarios above.  
- **Scripts:** `Automation-Testing/cypress/e2e/*.cy.js`

---
## 📊 Reports & Results

---
## 🎥 Demo Video

##  ⚙️ How to Run Locally
1. Clone the repo  
   ```bash
   git clone https://github.com/your-username/QA-Manual-and-Automation-Testing.git
   cd QA-Manual-and-Automation-Testing/Automation_Testing
   ```
2. Install dependencies
```bash
npm install
```
3. Run Cypress in headed mode
 ```bash
npx cypress open
```
4- Run Cypress in headless mode
 ```bash
npx cypress run
```
- Author: Wadha Al-Garni
- Date: September 2025


            
