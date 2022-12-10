describe('eSC Automation tests', () => {

  it('Open app', () => {
    cy.visit('/');
  })

  it("Log in as a seller", () => {
    cy.listenEndpoint();
    cy.login("card");
    cy.isLoginDataValid();
  })

  it("Log in as a client", () => {
    cy.listenEndpoint();
    cy.login("phone");
    cy.isLoginDataValid();
  })

  it("Logout", () => {
    cy.logout();
  })
})