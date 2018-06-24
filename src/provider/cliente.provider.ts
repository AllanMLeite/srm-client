import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/Cliente';
import { GenericProvider } from './generic.provider';

@Injectable()
export class ClienteProvider {

  endPointUrl: string = 'cliente';
  
  constructor(private genericProvider : GenericProvider) {
  }

  listarClientes(): Observable<any> {
    return this.genericProvider.get(this.endPointUrl)
  }

  cadastrar(cliente : Cliente) : Observable<Cliente>{
    return this.genericProvider.post(cliente, this.endPointUrl)
  }
}
