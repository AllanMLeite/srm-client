import { Injectable } from '@angular/core';
import { Cliente } from '../../model/Cliente';

@Injectable()
export class ClienteService {

  validarCliente(cliente : Cliente) {
    this.validaNomePreenchido(cliente.nome)
    this.validaLimitePreenchido(cliente.limite)
    this.validaRiscoPreenchido(cliente.risco)
  }

  validaNomePreenchido(nome : String){
    if(!nome || !nome.trim())
      throw new Error("Informe o nome.")
  }

  validaLimitePreenchido(limite : String){
    if(!limite || !limite.trim())
      throw new Error("Informe o limite")
  }

  validaRiscoPreenchido(risco : String){
    if(!risco || !risco.trim())
      throw new Error("Informe o risco.")
  }
}
