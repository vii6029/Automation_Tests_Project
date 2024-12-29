/// <reference types="cypress"/>
// a linha acima é uma referência quando usar cypress


//feature
describe('login', () => { //funcao que recebe dois parâmetros, o 1º é qual vai ser a funcionalidade testada, o 2º é uma função que vai ser executada

    //cenarios
    it('login com sucesso', () => {
    //it é a função que o 1º parâmetro é o cenário que eu quero testar e o outro é uma função anônima     
    //steps:
    // 1 - Acessar o site - tela de login
    cy.visit('/login')
      
    // 2 - Escrever no campo email
    cy.get('#user').type('eduardo@qazando.com.br') // o # significa ID

    // 3 - Escrever no campo senha
    cy.get('#password').type('123456')
    
    // 4 - clicar no botão login
    cy.get('#btnLogin').click()

    // 5 - Verificar se o login foi bem sucedido
    cy.url().should('include', '/my-account')

})
   
    it('Assinar news', () =>{
        //Para acessar a home da aplicação
        cy.visit('/')

    })
}) 


