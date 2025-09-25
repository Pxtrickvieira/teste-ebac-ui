const perfil = require('../fixtures/perfil.json')

describe('Funcionalidade de login', () => {

  beforeEach(() => {
    cy.visit('minha-conta/')
  
  })

  it('Deve fazr login com sucesso', () => {
    cy.get('[name="username"]').type('patrick.jvc@gmail.com')
    cy.get('#password').type('31070711')
    cy.get('input[name="login"]').click()
    cy.get('.page-title').should('have.text', 'Minha conta')
  })
  it('Deve fazer login com sucesso - Usando arquivo de dados', () => {
    cy.get('[name="username"]').type(perfil.usuario)
    cy.get('#password').type(perfil.senha)
    cy.get('input[name="login"]').click()
    cy.get('.page-title').should('have.text', 'Minha conta')

  })

  it('Deve exibir uma mensagem de erro ao inserir EMAIL inválido', () => {
    cy.get('[name="username"]').type('patrick@gmail.com')
    cy.get('#password').type('31070711')
    //botão login
    cy.get('input[name="login"]').click()

    cy.contains('Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
      .should('be.visible')
  })

  it('Deve exibir uma mensagem de erro ao inserir SENHA inválida', () => {
    cy.get('[name="username"]').type('patrick.jvc@gmail.com')
    cy.get('#password').type('310707113')
    //botão login
    cy.get('input[name="login"]').click()

    cy.contains('Erro: A senha fornecida para o e-mail patrick.jvc@gmail.com está incorreta. Perdeu a senha?')
      .should('be.visible')
  })
})