import { Injectable } from '@angular/core';
import { Cliente } from '../model/Cliente';

@Injectable()
export class AppService {
  
  constructor() {
  }

  validarCliente(cliente : Cliente) {
    this.validaNomePreenchido(cliente.nome)
    this.validaLimitePreenchido(cliente.limite)
  }

  validaNomePreenchido(nome : String){
    if(!nome || !nome.trim())
      throw new Error("Informe o nome.")
  }

  validaLimitePreenchido(limite : String){
    if(!limite || !limite.trim())
      throw new Error("Informe o limite.")
  }
}
