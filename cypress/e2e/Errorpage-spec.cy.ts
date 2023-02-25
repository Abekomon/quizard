export {}

describe('Error page testing', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/error")
  })

  it('should display a logo at the top of the page', () => {
    cy.get(".heading").contains("Quizard")
  })

  it('should open the error page and verify the url', () => {
    cy.url().should('include', 'error')
  })

  it('should display an error message', () => {
    cy.get("h2").contains("Oops! Something went wrong. Please try again.")
  })

  it('should have a link to take the user back to the homepage', () => {
    cy.get(".error-home").click()
  })
})