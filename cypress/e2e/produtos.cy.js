describe('Funcionalidade Página de produtos', () => {
  beforeEach(() => {
    cy.visit('produtos')
  })

  it('Deve selecionar um produto da lista ', () => {
    cy.get('a[title="Abominable Hoodie"]')
    cy.contains('a', 'Abominable Hoodie')
      .click()
  })

  it('Deve adicionar um produto ao carrinho', () => {

    var quantidade = 3

    cy.get('a[title="Ariel Roll Sleeve Sweatshirt"]')
    cy.contains('a', 'Ariel Roll Sleeve Sweatshirt')
      .click()
    cy.contains('.button-variable-item', 'Red')
      .click()
    cy.get('.button-variable-item-Red')
      .click()
    cy.get('.button-variable-item-XS')
      .click()

    cy.get('[name="quantity"]').clear().type(quantidade)

    cy.contains('button', 'Comprar').click()

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    cy.get('.woocommerce-message')
      .should('contain', quantidade + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')


  })

  it.only('Deve adicionar um produto ao carrinho - usando Comando customizado', () => {
    cy.addProdutos(2, 'Black', 'L', 'Aero Daily Fitness Tee' )


  })

})