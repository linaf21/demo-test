import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Customer } from '../domain/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDQ0Mzc1MTEsImlzcyI6Imh0dHBzOi8vemF0aHVyYWNvZGUub3JnIiwic3ViIjoiYWRtaW4iLCJleHAiOjE2NDUzMDE1MTF9.hSRpWSaEbIIRJ6C49telZyrX8lMH7yYQoEugNhmnOZU'
    })
  };

  API: string = 'http://localhost/api/v1/customer';

  constructor(public httpCliente: HttpClient) { }

  findAll(): Observable<Customer[]> {
    return this.httpCliente.get<Customer[]>(this.API, this.httpOptions);
  }

  save(customer:Customer):Observable<any>{
    return this.httpCliente.post(`${this.API}customer`,customer,this.httpOptions);
  }

}
