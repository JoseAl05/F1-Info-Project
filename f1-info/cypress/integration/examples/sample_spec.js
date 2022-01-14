describe('My First Test', () => {
    it('Visit F1 Information Web Page', () => {
      cy.visit('/')

      cy.contains('Circuits').click()

      cy.url().should('include', '/circuits')

      cy.get('[name="country"]').select('USA')

      cy.contains('Search Circuits').click()

      cy.get('[name="circuit"]').select('Circuit de Monaco')

      cy.contains('Search Races').click()

      cy.contains('See Results').first().click()
    })
  })
