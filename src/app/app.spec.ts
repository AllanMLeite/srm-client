import { AppService } from "./app.service";
import { Cliente } from "../model/Cliente";

describe('AppService:', () => {
    let service = new AppService
    
    function validaSeMensagemExibida(cliente : Cliente, mensagem : string){
        expect(() => service.validarCliente(cliente)).toThrow(new Error(mensagem))
    }

    it('deve exibir mensagem de obrigatoriedade para nome', () => {
        let cliente = new Cliente
        cliente.nome = " "
        validaSeMensagemExibida(cliente, "Informe o nome.")

        cliente.nome = null
        validaSeMensagemExibida(cliente, "Informe o nome.")
    })

    it('deve exibir mensagem de obrigatoriedade para nome', () => {
        let cliente = new Cliente
        cliente.nome = "Adriano"
        cliente.limite = " "
        validaSeMensagemExibida(cliente, "Informe o limite.")

        cliente.limite = null
        validaSeMensagemExibida(cliente, "Informe o limite.")
    })
})