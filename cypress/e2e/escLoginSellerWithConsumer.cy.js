describe("Login seller with consumer context" , () => {
    it('Open app', () => {
    cy.visit('/');
  })

  it("Verify if salesman or client is logged in", () => {
    cy.loginStatus();
  })

  it("Log in as a seller", () => {
    cy.listenLoginEndpoint();
    cy.login("card");
    cy.isLoginDataValid();
  })

  it("Log in as a client", () => {
    cy.listenLoginEndpoint();
    cy.goToConsumerLoginTab()
    cy.login("phone");
    cy.isLoginDataValid();
  })

  it("Logout", () => {
    cy.logout();
  })
})