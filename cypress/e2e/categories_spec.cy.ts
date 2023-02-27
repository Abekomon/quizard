export {}

describe('Categories page testing', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })
  
  it('should display a logo at the top of the page', () => {
    cy.get(".heading").contains("Quizard")
  })

  it('should populate category buttons on load', () => {
    cy.get('.cat-container').children().should('have.length', 6)
  })

  it('should go to corresponding quiz when a category card is clicked', () => {
    cy.intercept("GET", "https://opentdb.com/api.php?amount=20&category=9", {fixture: "quiz-stub"})
    cy.get('.cat-9').click().url().should('eq', 'http://localhost:3000/quiz')
    cy.get('.quiz-container').children().should('have.length', 3)
  })
})