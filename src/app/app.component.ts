import { Component } from '@angular/core';
import { Cliente } from '../model/Cliente';
import { MaskService } from '../service/MaskService';
import { ClienteProvider } from '../provider/cliente.provider';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cliente = new Cliente;
  clientes = new Array<Cliente>()
  pesquisado = false

  constructor(private clienteProvider : ClienteProvider, private service : AppService, private mask : MaskService ){
    this.listarClientes()
  }
  
  listarClientes(){
    this.clienteProvider.listarClientes()
    .subscribe(data => {
      this.clientes = JSON.parse(data._body)
      this.pesquisado = true},
    err => alert("Erro ao buscar clientes cadastrados."))
  }
  
  salvar(){
    let clienteParaTransmissao: Cliente = Object.assign({},this.cliente)

    if(clienteParaTransmissao.limite)
      clienteParaTransmissao.limite = this.mask.moneyToFloat(clienteParaTransmissao.limite)

    try {
      this.service.validarCliente(clienteParaTransmissao)
      this.clienteProvider.cadastrar(clienteParaTransmissao)
      .subscribe(data => {
        this.listarClientes()
        alert("Cliente cadastrado com sucesso.")
        this.cliente = new Cliente
      }, rej => alert(JSON.parse(rej._body).message))
    } catch (error) {
      alert(error.message)
    }
  }
}
