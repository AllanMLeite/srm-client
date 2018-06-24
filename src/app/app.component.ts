import { Component } from '@angular/core';
import { AppProvider } from './app.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  cliente;
  clientes;

  constructor(private appProvider : AppProvider ){
    appProvider.listarClientes().toPromise().then(data => this.clientes =JSON.parse(data._body))
  }
}
