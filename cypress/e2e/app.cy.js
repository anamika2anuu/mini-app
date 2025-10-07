describe("Mini App UI Test", () => {
  it("shows greeting message", () => {
    cy.visit("/");
    cy.get("#name").type("Anamika");
    cy.get("#btn").click();
    cy.get("#msg").should("contain.text", "Hello, Anamika!");
  });
});
