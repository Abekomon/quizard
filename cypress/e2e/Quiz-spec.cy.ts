export {}

describe('Quiz page testing', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://opentdb.com/api.php?amount=20&category=9", {fixture: "quiz-stub"})
    cy.visit("http://localhost:3000/")
    .get('.cat-9').click()
  })
  it('should open the quiz page and verify the url', () => {
    cy.url().should('eq', 'http://localhost:3000/quiz')
  })
  it('should display a logo at the top of the page', () => {
    cy.get(".heading").contains("Quizard")
  })
  it('should display a section with all questions', () => {
    cy.get(".quiz-container").children().should("have.length", 3)
  })
  it('should have a button to view the favorites page', () => {
    cy.get(".favorites-link").click()
    cy.url().should('eq', 'http://localhost:3000/favorites')
  })
  it('should display a button for each question to add it to favorites', () => {
    cy.get(".fav-btn").should("have.length", 3)
    cy.get(".fav-btn").contains("Add To Favorites")
  })
})