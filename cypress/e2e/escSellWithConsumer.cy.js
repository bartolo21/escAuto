describe('Transaction with consumer context', () => {
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
    
    it("Open consumer cart", () => {
      cy.goToConsumerCart();
    })

    it("Type product EAN and checkout", () => {
        cy.addEanAndCheckout(2); //podaj ilosc produktow ktore chcesz dodac
    })

    it("Close pop-up", () => {
      cy.closePopup();
    })
  }) 
    