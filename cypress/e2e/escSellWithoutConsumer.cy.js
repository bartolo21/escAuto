describe('Register new eSC account', () => {
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

    it("Open cart", () => {
        cy.goToCart();
    })
  }) 
    