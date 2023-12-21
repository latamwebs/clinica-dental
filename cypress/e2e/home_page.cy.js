describe("The Home Page", () => {
  it("successfully loads", () => {
    const baseUrl = Cypress.env("baseUrl") || "http://localhost:5173";
    cy.visit(baseUrl);
  });
});
