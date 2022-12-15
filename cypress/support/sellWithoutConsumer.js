import products from "../fixtures/products.json";

//fora dodalem aby podawac ile produktow chcemy dodac do koszyka :)
//wiem, ze to troche duzy blok ale rozbije go na mniejsze w przyszlosci
Cypress.Commands.add("addEanAndCheckout", (productsQuantity) => {
    if (productsQuantity == 1) {
        cy.get('button').eq(1).click();
        const randomProduct =  products.productsList[Math.floor(Math.random() * products.productsList.length)];
        cy.get('div[class="input"] > input[type="tel"]').type(randomProduct);
        cy.wait(2000)
        cy.get('button[class="green"]').click();
        cy.login("card");
    } else {
        for(let i = 1; i <= productsQuantity; i++) {
            cy.get('button').eq(1).click();
            const randomProduct =  products.productsList[Math.floor(Math.random() * products.productsList.length)];
            cy.get('div[class="input"] > input[type="tel"]').type(randomProduct);
            cy.wait(2000)
            if (i < productsQuantity) {
                cy.get('div[class="actions-container"]').find("button").first().click();
            }
        }
        cy.get('button[class="green"]').click();
        cy.login("card");
    }
})

//dodac asercje finalizacji koszyka backend
Cypress.Commands.add("closePopup", () => {
    cy.get('button[class="white"]').click({multiple: true, force: true});
})
