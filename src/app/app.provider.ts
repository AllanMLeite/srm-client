import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Cliente } from '../model/Cliente';

@Injectable()
export class AppProvider {

  url: string = 'https://srm-api.herokuapp.com/cliente';
  
  constructor(private http: Http) {
  }

  listarClientes(): Observable<any> {
    return this.get()
  }

  cadastrar(cliente : Cliente) : Observable<Cliente>{
    return this.post(cliente)
  }

  getOptions(): RequestOptions {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return new RequestOptions({ headers: headers })
  }

  post(cliente): Observable<any> {
    return this.http.post(this.url,JSON.stringify(cliente),this.getOptions())
  }

  get(): Observable<any> {
    return this.http.get(this.url,this.getOptions())
  }
}
