/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import commum_page from '../support/pages/commum_page'
import cadastro_usuario_page from '../support/pages/cadastro_usuario_page'

describe('Cadastro de usuário', () => {

    const nome = faker.name.fullName()
    const email = faker.internet.email()
    const senha = faker.number.int()

    beforeEach('Acessar cadastro de usuário', () => {
        commum_page.acessarCadstroUsuario()

    })

    it('Campo nome vazio', () => {
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo nome deve ser prenchido')


    })

    it('Campo E-mail vazio', () => {
        cadastro_usuario_page.preencherNome(nome)
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')

    })

    it('Campo E-mail inválido', () => {
        cadastro_usuario_page.preencherNome(nome)
        cadastro_usuario_page.preencherEmail(faker.name.firstName())
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')


    })

    it('Camp Senha vazio', () => {
        cadastro_usuario_page.preencherNome(nome)
        cadastro_usuario_page.preencherEmail(email)
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')



    })

    it('Camp Senha inválido', () => {

        cadastro_usuario_page.preencherNome(nome)
        cadastro_usuario_page.preencherEmail(email)
        cadastro_usuario_page.preencherSenha('12345')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')



    })

    it('Cadastro com sucesso', () => {
        cadastro_usuario_page.preencherNome(nome)
        cadastro_usuario_page.preencherEmail(email)
        cadastro_usuario_page.preencherSenha(senha)
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemSucesso(nome)
        


    })

})