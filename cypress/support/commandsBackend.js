// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("listenEndpoint", () => {
    cy.intercept("POST", "https://chic-node.docker.mug.pl:8010/api/esc/login").as('loginVerify');
})

Cypress.Commands.add("isLoginDataValid", () => {
    cy.wait("@loginVerify").then(is200 => {
        const loginVerify = is200.response.statusCode;
        if (loginVerify == 200) {
          expect(loginVerify).to.eq(200);
          cy.log("Endpoint response IS successful")
        } else {
          expect(loginVerify).to.not.eq(200);
          cy.log("Endpoint response is NOT successful")
          cy.get('generic-button[class="back"]').click();
        }
      }) 
})