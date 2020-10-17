

//first passing test
describe("First test", () =>{
    it("Does not do much", () => {
        expect(true).to.equal(true);
    })
});

//first failing test
// describe("Second test", () =>{
//     it("Does not do much", () => {
//         expect(false).to.equal(true);
//     })
// });

//Steps to be followed when testing a scenario:
//1. Arrange: setup the application state.
    //visit a page
    describe("Testing Kitchen Sink app", () => {
        it("Gets, types and asserts", () => {
            cy.visit("https://example.cypress.io/");
            cy.contains("type").click();
            cy.url().should("include", "/commands/actions");
            cy.get(".action-email").type("fake@email.com").should("have.value", "fake@email.com");
        })
    });
    //query for an element.
//2. Act: take an action.
    //interact with an element.
//3. Assert: make an assertion.
    //make an assertion.

