describe('User Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.contains('Sign In').click()
    cy.get('[name="username"]').type('daser')
    cy.get('[name="password"]').type('jpal0598')
    cy.get('#btn-submit-login').click()
  })
})

describe('When logged in, Test Circuits Module', () =>{
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.contains('Sign In').click()
    cy.get('[name="username"]').type('daser')
    cy.get('[name="password"]').type('jpal0598')
    cy.get('#btn-submit-login').click()
  })
  it('circuits module can be opened', () =>{
    cy.get('a[href*="/circuits"]').click()
  })
  it('view more info about circuits', () => {
    cy.get('a[href*="/circuits"]').click()
    cy.get('#table-of-all-circuits').contains('td','Istanbul Park').siblings().contains('a','More Info').click()
  })
  it('search circiuts by country', () => {
    cy.get('a[href*="/circuits"]').click()
    cy.get('[name="country"]').select('France')
    cy.get('#search-circuit-by-country-button').click()
  })
  it('races results module can be opened',() =>{
    cy.get('a[href*="/circuits"]').click()
    cy.get('[name="circuit"]').select('Hungaroring')
    cy.contains('button','Search Races').click()
    cy.get('#button-race-list-pagination-right-last-page').click()
    cy.get('#table-of-races-by-circuit').contains('td','2020').siblings().contains('a','See Results').click()
  })
  it('view more info from races',() =>{
    cy.get('a[href*="/circuits"]').click()
    cy.get('[name="circuit"]').select('Hungaroring')
    cy.contains('button','Search Races').click()
    cy.get('#button-race-list-pagination-right-last-page').click()
    cy.get('#table-of-races-by-circuit').contains('td','2020').siblings().contains('a','More Info').click()
  })
  it('logout',() =>{
    cy.contains('Logout').click()
  })
})
