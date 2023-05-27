/// <reference types="cypress" />

export default {
    acessarCadstroUsuario(){
        cy.visit('/')
            .get('#top_header')

            cy.get('.fa-lock').click()
    }
}