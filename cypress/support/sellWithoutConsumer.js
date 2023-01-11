import products from "../fixtures/products.json";
let usedEans = [];
//fora dodalem aby podawac ile produktow chcemy dodac do koszyka :)
//wiem, ze to troche duzy blok ale rozbije go na mniejsze w przyszlosci
Cypress.Commands.add("addEanAndCheckout", (productsQuantity) => {
    if (productsQuantity == 1) {
        cy.get('button').eq(1).click();
        let randomProduct =  products.productsList[Math.floor(Math.random() * products.productsList.length)];
        cy.get('div[class="input"] > input[type="tel"]').type(randomProduct);
        turnToArray(randomProduct);
        cy.wait(2000)
        cy.get('button[class="green"]').click();
        cy.login("card");
    } else {
        for(let i = 1; i <= productsQuantity; i++) {
            cy.get('button').eq(1).click();
            let randomProduct =  products.productsList[Math.floor(Math.random() * products.productsList.length)];
            cy.get('div[class="input"] > input[type="tel"]').type(randomProduct);
            turnToArray(randomProduct);
            cy.wait(2000)
            if (i < productsQuantity) {
                cy.get('div[class="actions-container"]').find("button").first().click();
            }
        }
        cy.get('button[class="green"]').click();
        cy.login("card");
    }
    for (let k = 0; k < usedEans.length; k++){
        console.log("Produkt numer " + k + " to " + usedEans[k])
    }
})

function turnToArray (tempVar) {
    tempVar = Array.of(tempVar)
    usedEans.push(tempVar);
}


Cypress.Commands.add("goToSalesHistory", () => {
    let str = '';
    for (let i = 0; i < usedEans.length; i++) {
        cy.get('generic-button[routerlink="/history"] > button').click({force: true});
        cy.get('button').eq(1).click();
        str += usedEans[i].toString() + ' ';
        cy.get('div[class="input"] > input[type="tel"]').type(str);
        cy.get('button[class="white"]').click({multiple: true, force: true});
     }
})


Cypress.Commands.add("closePopup", () => {
    cy.get('button[class="white"]').click({multiple: true, force: true});
})

