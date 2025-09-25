import { faker } from '@faker-js/faker';

describe('Funcionalidade Pré cadastro', () => {
beforeEach(() => {
  cy.visit('minha-conta/')
  
})

  it('Deve completar o pré cadastro com sucesso', () => {
    let nomeFaker = faker.person.firstName()
    let sobrenomeFaker = faker.person.lastName()
    let emailFaker = faker.internet.email()

    cy.get('#reg_email').type(emailFaker)
    cy.get('#reg_password').type('123456')
    cy.get('input[name="register"]').click()

    cy.contains('a', 'Detalhes da conta').click()

    cy.get('#account_first_name').type(nomeFaker)
    cy.get('#account_last_name').type(sobrenomeFaker)
    cy.contains('button', 'Save changes').click()
    cy.contains('Detalhes da conta modificados com sucesso.').should('be.visible')
    

  })
})