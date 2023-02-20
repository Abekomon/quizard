export {}

describe('Homepage testing', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.api-ninjas.com/v1/trivia?category=general&limit=20", {fixture: "quiz-stub"})
    cy.visit("http://localhost:3000/")
  })
  it('should open the homepage and verify the url', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  })
  it('should display a logo at the top of the page', () => {
    cy.get(".heading").contains("Quizard")
  })
  it('should display a section with all questions', () => {
    cy.get(".quiz-container").children().should("have.length", 6)
  })
  it('should have a button to view the favorites page', () => {
    cy.get(".favorites-link").click()
    cy.url().should('eq', 'http://localhost:3000/favorites')
  })
  it('should display a button for each question to add it to favorites', () => {
    cy.get(".fav-btn").should("have.length", 6)
    cy.get(".fav-btn").contains("Add To Favorites")
  })
})