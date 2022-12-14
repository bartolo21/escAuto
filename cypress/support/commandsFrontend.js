import clientData from "../fixtures/clientData.json";
import salesmanData from "../fixtures/salesmanData.json";

Cypress.Commands.add("logout", () => {
    cy.get('button[class="logout"]').click();
})

Cypress.Commands.add("login", (loginMethod) => {
    // const randomLoginData =  clientData.clientPhone[Math.floor(Math.random() * clientData.clientPhone.length)];
    if (loginMethod == "card") {
        cy.get('[icon="form"]').click();
        cy.get('.input > input[type="tel"]').focus().type(salesmanData.cardEan);
    } else if (loginMethod == "phone") {
        cy.get('[icon="form"]').click();
        cy.get('generic-button[icon="form"] > button').click();
        cy.get('generic-button[icon="form"] > button').click();
        cy.get('.input > input[type="tel"]').focus().type(clientData.clientPhone);
        cy.get('div[class="log-in"] > generic-button').click();
     }
})

Cypress.Commands.add("goToConsumerLoginTab", () => {
    cy.get('div[class="actions"] > button:first').click();
})

Cypress.Commands.add("goToCart", () => {
    cy.get('a[routerlink="/cart-sale"]').click();
})