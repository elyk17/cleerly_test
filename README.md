<h1>🧪 Cleerly Cypress API Test Suite</h1>

📌 Overview
This repository contains automated API tests for Cleerly, built using Cypress. The purpose of this suite is to validate the functionality, reliability, and performance of Cleerly's backend services through structured and repeatable test cases.

The tests are organized to ensure clarity, scalability, and ease of maintenance, with all test data stored in JSON format under a dedicated directory.

## 🏗️ Project Structure
```Code
cypress/
├── integration/
│   └── repositories/
│       ├── test-data-1.json
│       ├── test-data-2.json
│       └── ...
├── fixtures/
├── support/
├── plugins/
└── cypress.json
```
integration/repositories/: Contains all JSON files used for test data and payloads.

fixtures/: Optional directory for reusable static data.

support/: Custom commands and reusable logic.

plugins/: Cypress plugin configuration.

cypress.json: Cypress configuration file.

<h3>🚀 Getting Started</h3>
Prerequisites
Node.js  (v14 or higher recommended)

npm or yarn

Cypress installed globally or as a dev dependency

Installation
bash


Copy
git clone https://github.com/cleerly/cypress-api-tests.git
cd cypress-api-tests
npm install
Running Tests
To open the Cypress Test Runner:

bash


Copy
npx cypress open
To run tests headlessly:

bash


Copy
npx cypress run
🧪 Test Strategy
Each test targets a specific API endpoint used by Cleerly's platform.

JSON files in repositories/ contain request payloads and expected responses.

Tests validate:

Status codes

Response structure and schema

Business logic and edge cases

Performance thresholds (optional)

📄 Example Test Case
js


Copy
describe('GET /api/movies', () => {
  it('should return a list of movies', () => {
    cy.request('/api/movies').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('movies');
    });
  });
});
🧠 Purpose of This Suite
This test suite was created to:

Ensure backend reliability during development and deployment

Catch regressions early through automated validation

Provide a foundation for continuous integration testing

Serve as documentation for expected API behavior


