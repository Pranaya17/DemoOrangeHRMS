import credentials from "../../fixtures/logincredentials.js";
beforeEach(()=>{
  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList");
})

describe('LoginPage', () => {
    it('Valid credentials', () => {
      cy.get('input[name="username"]').type(credentials.Username);
      cy.get('input[type="password"]').type(credentials.Password);
      cy.get('button[type="submit"]').click();
      cy.get('.oxd-main-menu-item.active').click()
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('exist')
    })
    it('Invalid credentials', () => {
      cy.get('input[name="username"]').type(credentials.invalidUser);
      cy.get('input[type="password"]').type(credentials.invalidPassword);
      cy.get('button[type="submit"]').click();
      //cy.wait(4000);
     // cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').as('Invalidtext');
      //cy.get('@Invalidtext').should('have.text', 'Invalid credentials');
      //cy.log('@Invalidtext');
      cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').then(function(text)
    {
      cy.log(text.text());
    });
    })

  })