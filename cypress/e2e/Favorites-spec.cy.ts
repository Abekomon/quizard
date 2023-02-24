export {}

describe('Favorites page testing', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://opentdb.com/api.php?amount=20&category=9", {fixture: "quiz-stub"})
    cy.visit("http://localhost:3000/")
    .get('.cat-9').click()
    .get("[data-cy='button-0']").click()
    .get("[data-cy='button-1']").click()
    .get("[data-cy='button-2']").click()
    cy.get(".favorites-link").click()
  })
  it('should open the favorites page and verify the url', () => {
    cy.url().should('include', 'favorites')
  })
  it('should display a logo at the top of the page', () => {
    cy.get(".heading").contains("Quizard")
  })
  it('should display a section for questions', () => {
    cy.get(".quiz-container").children().should("have.length", 3)
  })
  it('should be able to remove a question from favorites page', () => {
    cy.get("[data-cy='button-0']").click()
    cy.get(".quiz-container").children().should("have.length", 2)
  })
  it('should be able to navigate back to the homepage', () => {
    cy.get(".back-link").click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})