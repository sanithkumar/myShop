import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Filter, Product, Register } from './model'
import { config } from '../config'


@Injectable()
export class CoreService {
  baseUrl = "/assets/"
  constructor(private http: HttpClient) { }

  getFilters(): Observable<Filter> {
    return this.http.get<Filter>(config.baseUrl + 'filters');
  }

  getProducts(): Observable<Product> {
    return this.http.get<Product>(config.baseUrl + 'products');
  }

  regsiter(o): Observable<any> {
    return this.http.post<any>(config.baseUrl + 'register', o, {
      headers: config.requestHeaders
    });
  }

  login(o): Observable<any> {
    return this.http.post<any>(config.baseUrl + 'login', o, {
      headers: config.requestHeaders
    });
  }

}
