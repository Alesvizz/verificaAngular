import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestioneService {

  baseUrl: string = "http://localhost:8080"

  constructor(private httpClient: HttpClient) { }

  login(newData: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/login`, newData);
  }

  register(newData: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/register`, newData);
  }
}
