// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('submitLoginForm', (usuario, senha) => {
    cy.get('[name="username"]').type(usuario)
    cy.get('#password').type(senha, { log: false })
    cy.get('input[name="login"]').click()
})

Cypress.Commands.add('preCadastro', (email, senha, nome, sobrenome) => {
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type(senha, { log: false })
    cy.get('input[name="register"]').click()

    cy.contains('a', 'Detalhes da conta').click()

    cy.get('#account_first_name').type(nome)
    cy.get('#account_last_name').type(sobrenome)
    cy.contains('button', 'Save changes').click()
})

Cypress.Commands.add('addProdutos', (quantidade, cor, tamanho, produto) => {

  cy.contains('a', produto).click()

   cy.contains('.button-variable-item', cor)
    .click()
  
  cy.get('.button-variable-item-' + tamanho)
    .click()
  cy.get('.button-variable-item-' + cor)
    .click()
  cy.get('[name="quantity"]').clear().type(quantidade)
  cy.contains('button', 'Comprar').click()
})
