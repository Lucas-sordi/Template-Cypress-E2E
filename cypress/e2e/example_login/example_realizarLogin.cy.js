import Login from "../../page_objects/example_realizarLogin.page";

describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it("Realizar login corretamente", () => {
        Login.preencherUsername("standard_user");
        Login.preencherPassword("secret_sauce");
        Login.clicarLogin();

        cy.url().should('include',  '/inventory.html');
    });

    it("Realizar login com senha inválida", () => {
        Login.preencherUsername("standard_user");
        Login.preencherPassword("outra_senha");
        Login.clicarLogin();

        cy.get('[data-test="error"]').should('be.visible');
    });
});