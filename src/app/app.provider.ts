import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppProvider {

  url: string = 'https://infinite-basin-63968.herokuapp.com/ ';
  //url: string = 'http://localhost:8080/cliente';

  constructor(private http: Http) {
  }

  listarClientes(): Observable<any> {
    return this.get()
  }

  get(parameter?: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers })

    return this.http.get(this.url,options)
  }
}
