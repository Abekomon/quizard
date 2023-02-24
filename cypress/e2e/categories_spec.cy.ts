export {}

describe('Categories page testing', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })
  
  it('should display a logo at the top of the page', () => {
    cy.get(".heading").contains("Quizard")
  })

  it('should populate category buttons on load', () => {
    cy.get('.cat-9').should("be.visible")
    cy.get('.cat-12').should("be.visible")
    cy.get('.cat-14').should("be.visible")
    cy.get('.cat-17').should("be.visible")
    cy.get('.cat-21').should("be.visible")
    cy.get('.cat-23').should("be.visible")
  })

  it('should go to corresponding quiz when a category card is clicked', () => {
    cy.intercept("GET", "https://opentdb.com/api.php?amount=20&category=9", {fixture: "quiz-stub"})
    cy.get('.cat-9').click().url().should('eq', 'http://localhost:3000/quiz')
  })
})