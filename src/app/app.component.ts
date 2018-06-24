import { Component } from '@angular/core';
import { AppProvider } from './app.provider';
import { Cliente } from '../model/Cliente';
import { MaskService } from '../service/MaskService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cliente = new Cliente;
  clientes = new Array<Cliente>()

  constructor(private appProvider : AppProvider, private mask : MaskService ){
    this.listarClientes()
  }

  listarClientes(){
    this.appProvider.listarClientes()
               .subscribe(data => this.clientes = JSON.parse(data._body),
                err => alert("Erro ao buscar clientes cadastrados."))
  }

  salvar(){
    let clienteParaTransmissao: Cliente = Object.assign({},this.cliente)

    if(clienteParaTransmissao.limite)
      clienteParaTransmissao.limite = this.mask.moneyConverter(clienteParaTransmissao.limite)

    this.appProvider.cadastrar(clienteParaTransmissao)
                    .subscribe(data => {
                      this.listarClientes()
                      alert("Cliente cadastrado com sucesso.")
                      this.cliente = new Cliente
                    }, rej => alert(JSON.parse(rej._body).message))
  }
}
