import availableRegisterLanguage from "../fixtures/availableRegisterLanguage.json";
import { faker } from '@faker-js/faker';
faker.locale = 'pl';

//po podaniu skrotu w glownym pliku sprawdzam co podalem i zapisuje do zmiennej
Cypress.Commands.add("langInputLogic", (regLanguage) => {
    if (regLanguage == "PL") {
        cy.chooseLanguage([0]);
    } else if (regLanguage == "EN") {
        cy.chooseLanguage([1]);
    } else if (regLanguage == "UA") {
        cy.chooseLanguage([2]);
    } else if (regLanguage == "CZ") {
        cy.chooseLanguage([3]);
    } else if (regLanguage == "DE") {
        cy.chooseLanguage([4]);
    } else if (regLanguage == "SK") {
        cy.chooseLanguage([5]);
    } else if (regLanguage == "LT") {
        cy.chooseLanguage([6]);
    } 
})

Cypress.Commands.add("openRegistrationChooseLang", (regLanguage) => {
    cy.get('div[class="actions"] > button').eq(3).click();
    cy.get('div[class="dropdown-value"]').click();
    cy.langInputLogic(regLanguage);
    cy.get('div[class="actions-container"]').find("button").eq(1).click();
})

//wybieram ten jezyk z listy ktory jest rowny temu z pliku
Cypress.Commands.add("chooseLanguage", (langArrayNum) => {
    cy.get('div[class="dropdown-option"]').contains(availableRegisterLanguage.registerLanguage[langArrayNum]).click();
})

const sampleName = faker.name.firstName();
const samplePhone = faker.phone.number('#########');
const sampleSurname = faker.name.lastName();
const sampleBirthdate = faker.phone.number('0#0#19##')
const sampleEmail = faker.internet.email();

Cypress.Commands.add("fillRegForm", () => {
    cy.get('div[class="input"]').first().type(samplePhone);
    cy.get('div[class="input"]').eq(1).type(sampleName);
    cy.get('div[class="input"]').eq(2).type(sampleSurname);
    console.log(sampleBirthdate)
    cy.get('div[class="input"]').eq(3).type(sampleBirthdate);
    cy.get('div[class="input"]').eq(4).type(sampleEmail);
})

Cypress.Commands.add("checkAgreementsAndRegister", (agreementsChoice) => {
	if (agreementsChoice == "mandatory") {
		cy.get('[id="declarationOfAge"] > div[class="checkbox-container esc"]').find('input[type="checkbox"]').click({force: true});
        cy.get('[id="personalDataAgreement"] > div[class="checkbox-container esc"]').find('input[type="checkbox"]').click({force: true});
	} else {
		cy.get('[id="allAgreements"] > div[class="checkbox-container esc"]').find('input[type="checkbox"]').click({force: true});
	}
    cy.get('button[class="green"] > div[class="center inner"]')//.click(); //nie chce zeby lecial sms na kanal przy kazdym zapisie
})