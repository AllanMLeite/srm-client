import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class GenericProvider {

  url: string = 'https://srm-api.herokuapp.com/';
  
  constructor(private http: Http) {
  }

  getOptions(): RequestOptions {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return new RequestOptions({ headers: headers })
  }

  post(body, endPoint): Observable<any> {
    return this.http.post(this.url+endPoint,JSON.stringify(body),this.getOptions())
  }

  get(endPoint): Observable<any> {
    return this.http.get(this.url+endPoint,this.getOptions())
  }
}
