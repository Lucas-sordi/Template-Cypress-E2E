/// <reference types="Cypress" />

    // elementos
    const inputUsername = '[data-test="username"]';
    const inputPassword = '[data-test="password"]';
    const buttonLogin = '[data-test="login-button"]';

export default class Login {
    static preencherUsername(value) {
        cy.get(inputUsername).type(value);
    };

    static preencherPassword(value) {
        cy.get(inputPassword).type(value);
    };

    static clicarLogin() {
        cy.get(buttonLogin).click();
    };
};